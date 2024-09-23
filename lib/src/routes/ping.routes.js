"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPing = void 0;
exports.getPing = {
    method: "GET",
    path: "/ping",
    handler: () => {
        return { status: "ok" };
    }
};
