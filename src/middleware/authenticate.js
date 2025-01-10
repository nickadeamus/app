const { AtProto } = require('atproto');

module.exports = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Assuming token is passed via Authorization header
  
  if (!token) {
    return res.status(403).json({ message: 'No session token provided' });
  }

  try {
    // Verify token using ATProtocol SDK (or equivalent)
    const user = await atproto.verifySession(token);
    req.user = user;  // Attach the authenticated user to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired session token' });
  }
};
