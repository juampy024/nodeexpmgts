"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRepository = exports.getUserByUsernameRepository = exports.getUserByIdRepository = void 0;
const dataBase_1 = require("dataBase");
const getUserByIdRepository = async (id) => {
    try {
        const response = await dataBase_1.pool.query(`SELECT * FROM u_user_get_user_by_id(${id})`);
        return response.rows;
    }
    catch (e) {
        return e;
    }
};
exports.getUserByIdRepository = getUserByIdRepository;
const getUserByUsernameRepository = async (username) => {
    try {
        const response = await dataBase_1.pool.query(`SELECT * FROM u_user_get_user_by_username('${username}')`);
        if (response.rows.length > 0)
            return response.rows[0];
        return null;
    }
    catch (e) {
        return e;
    }
};
exports.getUserByUsernameRepository = getUserByUsernameRepository;
const createUserRepository = async (user) => {
    try {
        const query = 'select u_user_entry_create($1,$2,$3,$4,$5,$6)';
        const values = [user.username, user.password, user.email, user.phone, user.created_datetime, user.deleted_datetime];
        const response = await dataBase_1.pool.query(query, values);
        return response.rows;
    }
    catch (e) {
        return e;
    }
};
exports.createUserRepository = createUserRepository;
//# sourceMappingURL=userRepository.js.map