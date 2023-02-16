"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = exports.getUserByIdService = void 0;
const bcrypt_handle_1 = require("app/utils/bcrypt.handle");
const dateConverter_1 = require("app/utils/dateConverter");
const userRepository_1 = require("dataAccess/repositories/userRepository");
const getUserByIdService = async (id) => {
    const userResponse = await (0, userRepository_1.getUserByIdRepository)(id);
    return userResponse;
};
exports.getUserByIdService = getUserByIdService;
const createUserService = async (user) => {
    const usernameExist = await (0, userRepository_1.getUserByUsernameRepository)(user.username.toLowerCase());
    if (usernameExist)
        return 'USERNAME_ALREADY_TAKEN';
    const hassPass = await (0, bcrypt_handle_1.encrypt)(user.password);
    const userDto = {
        username: user.username.toLocaleLowerCase(),
        password: hassPass,
        email: user.email,
        phone: user.phone,
        created_datetime: (0, dateConverter_1.yyyMmDDHhMmSsMl)(),
        deleted_datetime: (0, dateConverter_1.yyyMmDDHhMmSsMl)()
    };
    const createUserResponse = await (0, userRepository_1.createUserRepository)(userDto);
    return createUserResponse;
};
exports.createUserService = createUserService;
//# sourceMappingURL=user.js.map