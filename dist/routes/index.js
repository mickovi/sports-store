"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutes = void 0;
const catalog_1 = require("./catalog");
// import { createOrderRoutes } from "./orders";
const createRoutes = (app) => {
    (0, catalog_1.createCatalogRoutes)(app);
    // createOrderRoutes(app);
};
exports.createRoutes = createRoutes;
