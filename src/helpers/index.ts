import { Express } from "express";
import { getConfig } from "../config";
import { engine } from "express-handlebars";
import * as env_helpers from "./env";
import * as catalog_helpers from "./catalog_helpers";

const location = getConfig("templates:location");
const config = getConfig("templates:config");

// The createTemplates function configures the template engine 
// and registers it with Express.
export const createTemplates = (app: Express) => {
  app.set("views", location);
  app.engine(
    "handlebars",
    engine({
      ...config,
      helpers: { ...env_helpers, ...catalog_helpers },
    })
  );
  app.set("view engine", "handlebars");
};
