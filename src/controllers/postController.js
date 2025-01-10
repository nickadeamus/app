const Post = require('../models/Post');  // Assuming you have a Post model for MongoDB
const { AtProto } = require('atproto');  // Importing ATProtocol for possible interaction
const atproto = new AtProto({
  repo: 'bsky.app', // Your ATProtocol repo or instance
});

exports.createPost = async (req, res) => {
  const { content, imageUrl, visibility } = req.body;
  const { userId } = req.user;  // Assuming `req.user` is populated by the auth middleware

  if (!content) {
    return res.status(400).json({ message: 'Content is required for a post' });
  }

  try {
    // 1. Create the post with ATProtocol (Example using bsky.app repo)
    const postResponse = await atproto.createPost({
      userId,
      content,
      imageUrl,  // Optional
      visibility,  // Optional, e.g., public, private
    });

    // 2. Save the post to your MongoDB (if you’re keeping a local copy of posts)
    const post = new Post({
      userId,
      content,
      imageUrl,
