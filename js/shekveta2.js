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