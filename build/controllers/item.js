"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.createItem = exports.getItems = exports.getItem = void 0;
const error_handle_1 = require("app/utils/error.handle");
const getItems = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GETTING_ITEMS');
    }
};
exports.getItems = getItems;
const getItem = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GETTING_ITEM');
    }
};
exports.getItem = getItem;
const createItem = ({ body }, res) => {
    try {
        res.send(body);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_CREATING_ITEM');
    }
};
exports.createItem = createItem;
const updateItem = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATING_ITEM');
    }
};
exports.updateItem = updateItem;
const deleteItem = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETING_ITEM');
    }
};
exports.deleteItem = deleteItem;
//# sourceMappingURL=item.js.map