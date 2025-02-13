import { Express, ErrorRequestHandler } from "express";
import { getConfig } from "./config";
import "express-async-errors";

const templateErr400 = getConfig("errors:400");
const templateErr500 = getConfig("errors:500");

export const createErrorHandlers = (app: Express) => {
  app.use((req, resp) => {
    resp.statusCode = 404;
    resp.render(templateErr400);
  });
  const handler: ErrorRequestHandler = (error, req, resp, next) => {
    console.log(error);
    if (resp.headersSent) {
      return next(error);
    }
    try {
      resp.statusCode = 500;
      resp.render(templateErr500, { error });
    } catch (newErr) {
      next(error);
    }
  };
  app.use(handler);
};
