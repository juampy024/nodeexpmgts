"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_1 = require("controllers/user");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * http://localhost:3001/users [GET]
 */
router.get('/', user_1.getusers);
router.get('/:id', user_1.getUserById);
router.post('/', user_1.createuser);
router.put('/:id', user_1.updateuser);
router.delete('/:id', user_1.deleteuser);
//# sourceMappingURL=user.js.map