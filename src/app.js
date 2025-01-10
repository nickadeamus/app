const config = require('./config/config');  // Import config.js

// Use ATProtocol settings
const repoUrl = config.atproto.repo;
const username = config.atproto.username;
const password = config.atproto.password;

// Use MongoDB settings
const mongodbUri = config.mongodb.uri;

// Use session settings
const sessionSecret = config.session.secret;

// Example of using port for the server
const port = config.server.port;
