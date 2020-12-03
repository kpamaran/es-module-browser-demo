const path = require('path');
const express = require('express');
const app = express();
const port = 7070;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/webpack', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/webpack-index.html'));
});

app.get('/rollup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/rollup-index.html'));
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});