"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteuser = exports.updateuser = exports.createuser = exports.getusers = exports.getUserById = void 0;
const error_handle_1 = require("app/utils/error.handle");
const user_1 = require("business/user");
const getUserById = async ({ params }, res) => {
    try {
        console.log('paso por el controlador');
        const { id } = params;
        const responseUser = await (0, user_1.getUserByIdService)(id);
        if (responseUser)
            res.send(responseUser);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GETTING_USER', e);
    }
};
exports.getUserById = getUserById;
const getusers = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GETTING_USERS');
    }
};
exports.getusers = getusers;
const createuser = async ({ body }, res) => {
    try {
        const createUserResponse = await (0, user_1.createUserService)(body);
        res.send(createUserResponse);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_CREATING_USER');
    }
};
exports.createuser = createuser;
const updateuser = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATING_USER');
    }
};
exports.updateuser = updateuser;
const deleteuser = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETING_USER');
    }
};
exports.deleteuser = deleteuser;
//# sourceMappingURL=user.js.map