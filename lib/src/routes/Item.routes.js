"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItmes = exports.createItem = void 0;
const index_1 = require("../controllers/index");
const apiPrefixPath = `/v1/item`;
exports.createItem = {
    method: "POST",
    path: `${apiPrefixPath}`,
    options: {
        handler: index_1.createItemHandler
    }
};
exports.getItmes = {
    method: "POST",
    path: `${apiPrefixPath}`,
    options: {
        handler: getItemsHandler
    }
};
