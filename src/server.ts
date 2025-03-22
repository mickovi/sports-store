import { createServer } from "node:http";
import express, { Express } from "express";
import helmet from "helmet";
import { getConfig } from "./config";
import { createRoutes } from "./routes";
import { createTemplates } from "./helpers";
import { createErrorHandlers } from "./errors";
import { createSessions } from "./sessions";

const port = getConfig("http:port", 8080);

const expressApp: Express = express();

expressApp.use(helmet()); // Add security headers (like Content-Security-Policy, X-Frame-Options, etc.)
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies with extended syntax (json)

expressApp.use(express.static("node_modules/bootstrap/dist"));
createTemplates(expressApp);
createRoutes(expressApp);
createErrorHandlers(expressApp);
createSessions(expressApp);

const server = createServer(expressApp);
server.listen(port, () => console.log(`HTTP Server listening on port ${port}`));
