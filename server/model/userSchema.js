const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        cpassword: {
            type: String,
            required: true
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true
                }
            }
        ],
        products: [
            {
                title: {
                    type: String,
                    required: true
                },
                description: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                }
            }
        ]
    
});

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    } 
    next();
});

// generate JWT token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)

        this.tokens = this.tokens.concat({ token: token });

        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

// add product
userSchema.methods.addProductToUser = async function ( title, description, quantity, price ) {
    try {
        this.products = this.products.concat({ title, description, quantity, price })

        await this.save();
        return this.products;

    } catch (err) {
        console.log(err)
    }
}


const User = mongoose.model('userNames', userSchema)

module.exports = User;
