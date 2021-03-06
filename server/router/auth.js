const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const authenticate = require('../middleware/authenticate')

require('../database/connection');
const User = require('../model/userSchema');


// router.get('/', (req, res) => {
//     res.send('hello from router backend')
// });

// register a new user
router.post('/register', async (req, res) => {

    const { name, email, password, cpassword, products } = req.body;
    
    if(!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: 'Please fill in the details' })
    }

    try{
        const userExist = await User.findOne({ email: email })

        if(userExist) {
            return res.status(422).json({ error: "User already registered" })
        } else if (password !== cpassword) {
            return res.status(422).json({ error: 'Passwords do not match' })
        } else {
            const user = new User({ name, email, password, cpassword, products });
  
            // middleware added in userSchema.js to encrypt the password
    
            const userRegister = await user.save();
            userRegister && res.status(201).json({ message: 'User registered successfully' }) 
        }
    } catch (err) {
        console.log(err);
    }
})


// login existing user
router.post('/login', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({ error: 'Please fill in the login details' });
        }

        const userLogin = await User.findOne({ email: email })
        
        if(userLogin) {
            const checkPassword = await bcrypt.compare(password, userLogin.password)

            if(!checkPassword) {
                res.status(400).json({ message: 'Invalid Credentials' })
            } else {
                token = await userLogin.generateAuthToken();

                res.cookie("jwtToken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                res.status(201).json({ message: 'User logged in successfully' })
            }
        } else {
            res.status(400).json({ message: 'Invalid Credentials' })
        }

    } catch (err) {
        console.log(err);
    }
})

// redirect to login page if user is not signed in
router.get('/listing', authenticate, (req, res) => {
    res.send(req.rootUser);
})


// add new product to the list
router.post('/addProduct', authenticate  , async (req, res) => {
    try {
        const { title, description, quantity, price } = req.body;

        if( !title || !description || !quantity || !price ) {
            console.log('error in contact form');
            return res.json({ error: 'Please fill the entire contact form' })
        }

        const getUserId = await User.findOne({ _id: req.userID })

        if(getUserId) {
            const userProduct = await getUserId.addProductToUser( title, description, quantity, price )
            await userProduct.save()

            ress.status(201).json({ message: 'Product added successfully' })
        }

    } catch (err) {
        console.log(err)
    }
})


// logout user
router.get('/logout', (req, res) => {
    res.clearCookie('jwtToken', {path: '/'})
    res.status(200).send('loggout');
})


// fetch products to view on listing page
router.get('/getProducts', async (req, res) => {
    const allUsers = await User.find({})
    res.send(allUsers)
})

module.exports = router;