const userModel = require("../models/user-model");
const mailService = require("./mail-service");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
class UserService {
  async registration(email, password) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Error("Пользователь уже зарегестрирован");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await userModel.create({
      email,
      password: hashPassword,
      activationLink,
    });

    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken)
    return { ...tokens, user: userDto }
}
async activate(activationLink){
  const user = await userModel.findOne({activationLink});
  if(!user){
    throw new Error("некорректная ссылка")
  }
  user.isActivated = true;
  await user.save();
}
async login(email, password){
  const user = await userModel.findOne({email})
  if(!user){
    throw new Error("User not found");
  }
  const isPassEquals = await bcrypt.compare(password, user.password)
  if(!isPassEquals){
    throw new Error("неверный пароль")
  }
  const userDto = new UserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto }
}
async logout(refreshToken){
  
}
}
module.exports = new UserService();
