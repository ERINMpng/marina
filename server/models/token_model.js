const {Schema, model} = require('mongoose')
const user_model = require('./user_model')

const TokenModel = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: {type: String, required: true}
})

module.exports = madel('Token', TokenModel)