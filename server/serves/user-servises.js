const userModel = require('../models/user_model')
const mailServises = require('./mail-servises')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
import tokenServises from './token-servises'

class UserServises {
    async registration(email, password){
        const condidate = await userModel.fineOne({email});
        if(condidate){
            throw new Error('Пользователь уже зарегистрирован.')
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const actionLink = uuid.v4();
        const user = await userModel.create({email, password:hashPassword});
        await mailServises.sendActivationMail(email, actionLink)
        const token = tokenServises.generateTokens(user);
    }
}
module.export = new UserServises();