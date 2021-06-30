const express = require('express');
const router = express.Router();

require('../database/connection');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('hello from router backend')
});

router.post('/register', (req, res) => {
    const { name, email, password, cpassword } = req.body;
    
    if(!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: 'Please fill in the details' })
    }

    User.findOne({ email: email })
    .then((userExist) => {

        if(userExist) {
            return res.status(422).json({ error: "User already registered" })
        }

        const user = new User({ name, email, password, cpassword });

        user.save().then(() => {
            res.status(201).json({ message: 'User registered successfully' });
        }).catch((err) => {
            res.status(500).json({ error: 'Failed to register' });
        })
    }).catch((err) => {
        console.log(err)
    })
})

// router.post('/listing', (req, res) => {
//     console.log(req.body);
//     res.json({ details: {
//         listing: req.body 
//     }})
//     // res.send('router page')
// })

module.exports = router;