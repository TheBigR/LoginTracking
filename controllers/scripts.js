const path = require('path');

module.exports = {
    collect: (req, res) => {
        res.header('Access-Control-Allow-Origin', ['*']);
        res.sendFile(path.join(__dirname + '/../scripts/collect.js'));
    },
    init: (req, res) => {
        res.header('Access-Control-Allow-Origin', ['*']);
        res.sendFile(path.join(__dirname + '/../pages/index.html'));
    },
    collectorApi: (req, res) => {
        let status = 200;
        let result = {};
        result.name = req.body.name;
        console.log('collecting...');
        res.status(status).send(result.name);

    }
};
