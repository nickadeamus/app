async function authenticate(req, res, next) {
  const sessionToken = req.header('Authorization')?.replace('Bearer ', '');
  if (!sessionToken) {
    return res.status(403).send('Access denied');
  }

  try {
    const user = await client.verifySession(sessionToken); // Assume this method exists in client
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send('Invalid session token');
  }
}

module.exports = authenticate;

