const path = require('path');

module.exports = {
    collect: (req, res) => {
        res.header('Access-Control-Allow-Origin', ['*']);
        res.sendFile(path.join(__dirname + '/../scripts/collect.js'));
    },
    init: (req, res) => {
        res.header('Access-Control-Allow-Origin', ['*']);
        res.sendFile(path.join(__dirname + '/../pages/index.html'));
    }
};
