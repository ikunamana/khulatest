const bodyParser = require('body-parser');
var mongoose = require ('mongoose');
var chema = mongoose.Schema;

const postSchema = new Schema({
    email: {type: String, required: true},
    password:{type: String, required: true},
    repeatpas:{type: String, required: true},
});
var Post = mongoose.model('Post', postSchema);
module.exports = Post;

var express = require('express');
var router = express.Router();
const Post = require('../models/post');
 
 
router.post('/new', (req, res) => {
    var post = new Post(req.body);
 
    post.save(function(err, user) {
        if(err) console.log(err);
        return res.send("Success! Your post has been saved.");
    });
});