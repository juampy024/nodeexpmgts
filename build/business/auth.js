"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logingUserService = exports.registerNewUser = void 0;
const jwt_handle_1 = require("app/utils/jwt.handle");
const bcrypt_handle_1 = require("app/utils/bcrypt.handle");
const userRepository_1 = require("dataAccess/repositories/userRepository");
const registerNewUser = async ({ username, password }) => {
    /*     if (!user) return "NOT_FOUND_USER";
  
      const passHash = await encrypt(user.password);
      const registerNewUser = await createUserService(auth); */
};
exports.registerNewUser = registerNewUser;
const logingUserService = async ({ username, password }) => {
    const user = await (0, userRepository_1.getUserByUsernameRepository)(username.toLowerCase());
    if (!user)
        return 'NOT_FOUND_USER';
    const isPassCorrect = await (0, bcrypt_handle_1.verified)(password, user.password);
    if (!isPassCorrect)
        return 'PASSWORD_NOT_VALID';
    const token = await (0, jwt_handle_1.generateToken)(user);
    const data = {
        token,
        username: user.username
    };
    return data;
};
exports.logingUserService = logingUserService;
//# sourceMappingURL=auth.js.map