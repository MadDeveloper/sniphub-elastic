const env = process.env.NODE_ENV || 'development'
let config = {}

switch (env.toLowerCase()) {
    case 'production':
        config = require('./config.prod')
        break;

    default:
        config = require('./config.dev')
        break;
}

module.exports = config