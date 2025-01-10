const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Assuming you have a User model to associate with posts
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'public',
  },
  atprotoPostId: {
    type: String,  // Store the ATProtocol post ID for future reference
  },
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
