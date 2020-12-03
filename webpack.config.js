const path = require('path');

module.exports = {
    entry: './src/main.mjs',
    output: {
        filename: 'webpack-main.js',
        path: path.resolve(__dirname, 'public')
    }
};