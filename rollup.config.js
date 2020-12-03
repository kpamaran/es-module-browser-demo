const path = require('path');

export default {
    input: 'src/main.mjs',
    output: {
        dir: path.resolve(__dirname, 'public'),
        format: 'es'
    }
}