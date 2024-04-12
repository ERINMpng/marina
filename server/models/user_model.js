const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email: {type: String, uniqui: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String}
});

module.exports = madel('User', UserSchema)