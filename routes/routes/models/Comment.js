// models/Comment.js
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: String,
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    parentComment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }
});

module.exports = mongoose.model('Comment', CommentSchema);
