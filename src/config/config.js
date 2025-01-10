const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from a .env file

module.exports = {
  // ATProtocol settings
  atproto: {
    repo: process.env.ATPROTO_REPO || 'bsky.app',  // Example default repo
    username: process.env.ATPROTO_USERNAME,  // User credentials for logging in
    password: process.env.ATPROTO_PASSWORD,  // Optional for manual login
  },
  
  // MongoDB settings (assuming you're using MongoDB)
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database',  // MongoDB URI (use environment variable if set)
  },
  
  // Server settings
  server: {
    port: process.env.PORT || 5000,  // Default to 5000 unless specified
  },

  // JWT or session settings
  session: {
    secret: process.env.SESSION_SECRET || 'your-secret-key',  // Secret for sessions
    expiresIn: process.env.SESSION_EXPIRES_IN || '1h',  // Session expiry time
  },

  // Additional custom settings
  custom: {
    featureFlag: process.env.FEATURE_FLAG || false,  // Example custom setting
  },
};
