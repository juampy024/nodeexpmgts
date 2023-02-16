"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yyyMmDDHhMmSsMl = void 0;
const yyyMmDDHhMmSsMl = () => {
    const date = new Date(Date.now()).toISOString().replace('T', ' ').replace('Z', '');
    return date;
};
exports.yyyMmDDHhMmSsMl = yyyMmDDHhMmSsMl;
//# sourceMappingURL=dateConverter.js.map