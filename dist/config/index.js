"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = exports.getEnviroment = exports.getConfig = void 0;
const node_fs_1 = require("node:fs");
const environment_1 = require("./environment");
Object.defineProperty(exports, "getEnviroment", { enumerable: true, get: function () { return environment_1.getEnviroment; } });
Object.defineProperty(exports, "Env", { enumerable: true, get: function () { return environment_1.Env; } });
const merge_1 = require("./merge");
const file = process.env.SERVER_CONFIG ?? "server.config.json";
const data = JSON.parse((0, node_fs_1.readFileSync)(file).toString());
try {
    const envFile = (0, environment_1.getEnviroment)().toString() + "." + file; //  "development.server.config.json";
    const envData = JSON.parse((0, node_fs_1.readFileSync)(envFile).toString());
    (0, merge_1.merge)(data, envData);
}
catch { }
const getConfig = (path, defaultVal = undefined) => {
    const paths = path.split(":"); // ["http", "port"]
    let val = data; // val = {http: {port: 5000}}
    console.log(data);
    paths.forEach((p) => (val = val[p])); // val = val["http"] = {port: 5000}, val = val["port"] = 5000
    return val ?? defaultVal;
};
exports.getConfig = getConfig;
