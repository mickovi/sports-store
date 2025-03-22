import { Express } from "express";
import { createCatalogRoutes } from "./catalog";
// import { createOrderRoutes } from "./orders";

export const createRoutes = (app: Express) => {
  createCatalogRoutes(app);
  // createOrderRoutes(app);
};
