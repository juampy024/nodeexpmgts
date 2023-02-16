"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123456',
    database: 'maxAhorro',
    port: 5432
});
exports.pool = pool;
//# sourceMappingURL=dataBase.js.map