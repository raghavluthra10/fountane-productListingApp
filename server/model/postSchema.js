const mongoose = require('mongoose');
const User = require('./userSchema');

const postSchema = new mongoose.Schema({
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
});

const Post = mongoose.model('products', postSchema);

module.exports = Post;