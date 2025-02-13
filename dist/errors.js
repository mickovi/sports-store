"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorHandlers = void 0;
const config_1 = require("./config");
require("express-async-errors");
const templateErr400 = (0, config_1.getConfig)("errors:400");
const templateErr500 = (0, config_1.getConfig)("errors:500");
const createErrorHandlers = (app) => {
    app.use((req, resp) => {
        resp.statusCode = 404;
        resp.render(templateErr400);
    });
    const handler = (error, req, resp, next) => {
        console.log(error);
        if (resp.headersSent) {
            return next(error);
        }
        try {
            resp.statusCode = 500;
            resp.render(templateErr500, { error });
        }
        catch (newErr) {
            next(error);
        }
    };
    app.use(handler);
};
exports.createErrorHandlers = createErrorHandlers;
