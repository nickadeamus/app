const { AtProto } = require('atproto');
const atproto = new AtProto({
  repo: 'bsky.app', // Example repo (you might need to use your own instance URL)
});

// Register User
exports.register = async (req, res) => {
  const { username, password, email } = req.body;
  
  try {
    // Create a new user using ATProtocol
    const user = await atproto.createUser({ username, password, email });
    
    // Return success response
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user with ATProtocol' });
  }
};

// Login User
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Log in the user using ATProtocol
    const session = await atproto.login(username, password);
    
    // Return a session token or user data (ATProtocol uses this for identity)
    res.status(200).
