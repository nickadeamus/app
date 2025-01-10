const { AtprotoClient } = require('atproto');

const client = new AtprotoClient({
  service: 'https://bsky.social', // or your own instance
});

async function authenticateWithAtProtocol(username, password) {
  try {
    const user = await client.login({
      identifier: username,
      password: password,
    });
    return user;
  } catch (error) {
    throw new Error('Authentication failed: ' + error.message);
  }
}

module.exports = { authenticateWithAtProtocol };
