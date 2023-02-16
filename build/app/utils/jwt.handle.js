"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101';
const generateToken = async (user) => {
    const jwt = await (0, jsonwebtoken_1.sign)({ payload: { id: user.id, username: user.username } }, JWT_SECRET, { expiresIn: '2h' });
    return jwt;
};
exports.generateToken = generateToken;
const verifyToken = async () => { };
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.handle.js.map