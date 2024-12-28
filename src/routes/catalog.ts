import { Express } from "express";
export const createCatalogRoutes = (app: Express) => {
  app.get("/", (req, res) => {
    // res.send("Hello, SportsStore Route");
    res.render("index");
  });
  app.get("/err", (req, resp) => {
    throw new Error("Something bad happened");
  });
  app.get("/asyncerr", async (req, resp) => {
    throw new Error("Something bad happened asynchronously");
  });
};
