import { createServer } from "node:http";
import express, { Express } from "express";
import helmet from "helmet";
import { getConfig } from "./config";
import { createRoutes } from "./routes";
import { createTemplates } from "./helpers";
import { createErrorHandlers } from "./errors";

const port = getConfig("http:port", 8080);

const expressApp: Express = express();

expressApp.use(helmet());
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
/* expressApp.get("/", (req, res) => {
  res.send("Hello, World");
}); */

expressApp.use(express.static("node_modules/bootstrap/dist"));
createTemplates(expressApp);
createRoutes(expressApp);
createErrorHandlers(expressApp);

const server = createServer(expressApp);
server.listen(port, () => console.log(`HTTP Server listening on port ${port}`));
