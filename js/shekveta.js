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
