const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
const path = require('path');

const connUri = process.env.MONGO_LOCAL_CONN_URL;
const Login = require('../models/logins');

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
        mongoose.connect(connUri, {useNewUrlParser: true}, (err) => {
            let result = {};
            let status = 201;
            if (!err) {
                const {name, password} = req.body;
                const login = new Login({name, password});
                login.save((err, login) => {
                    if (!err) {
                        result.status = status;
                        result.result = login;
                    } else {
                        status = 500;
                        result.status = status;
                        result.error = err;
                    }
                    res.status(status).send(result);
                });
            } else {
                status = 500;
                result.status = status;
                result.error = err;
                res.status(status).send(result);
            }
        });
    }
};
