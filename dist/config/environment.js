"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnviroment = exports.Env = void 0;
var Env;
(function (Env) {
    Env["Development"] = "development";
    Env["Production"] = "production";
})(Env || (exports.Env = Env = {}));
const getEnviroment = () => {
    const env = process.env.NODE_ENV;
    return env === undefined || env === Env.Development
        ? Env.Development
        : Env.Production;
};
exports.getEnviroment = getEnviroment;
