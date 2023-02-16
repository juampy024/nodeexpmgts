"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = exports.loginController = void 0;
const auth_1 = require("business/auth");
const error_handle_1 = require("app/utils/error.handle");
const user_1 = require("business/user");
const loginController = async ({ body }, res) => {
    try {
        const responseUser = await (0, auth_1.logingUserService)(body);
        if (responseUser === 'PASSWORD_NOT_VALID') {
            res.status(403);
            res.send(responseUser);
        }
        else if (responseUser === 'NOT_FOUND_USER') {
            res.status(404);
            res.send(responseUser);
        }
        else {
            res.send(responseUser);
        }
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_CREATING_USER');
    }
};
exports.loginController = loginController;
const signupController = async ({ body }, res) => {
    try {
        const createUserResponse = await (0, user_1.createUserService)(body);
        res.send(createUserResponse);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_CREATING_USER');
    }
};
exports.signupController = signupController;
//# sourceMappingURL=auth.js.map