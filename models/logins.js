const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];

const Schema = mongoose.Schema;

const loginSchema = new Schema({
    name:
        {
            type: 'String',
            required: true,
            trim: true,
            unique: false
        },
    password:
        {
            type: 'String',
            required: true,
            trim: true
        }
});

// loginSchema.pre('save', function (next) {
//     const login = this;
//     if(!login.isModified || !login.isNew) {
//         next();
//     } else {
//         bcrypt.hash(login.password, stage.saltingRounds, function (err, hash) {
//             if (err) {
//                 console.log('error hashing password for user' , login.name);
//                 next(err);
//             } else {
//                 login.password = hash;
//                 next();
//             }
//         });
//     }
// });

module.exports = mongoose.model('Login', loginSchema);
