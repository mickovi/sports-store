import { readFileSync } from "node:fs";
import { getEnviroment, Env } from "./environment";
import { merge } from "./merge";

const file = process.env.SERVER_CONFIG ?? "server.config.json";
const data = JSON.parse(readFileSync(file).toString());

try {
  const envFile = getEnviroment().toString() + "." + file; //  "development.server.config.json";
  const envData = JSON.parse(readFileSync(envFile).toString());

  merge(data, envData);
} catch {}

export const getConfig = (path: string, defaultVal: any = undefined): any => {
  const paths = path.split(":"); // ["http", "port"]
  let val = data; // val = {http: {port: 5000}}
  console.log(data)
  paths.forEach((p) => (val = val[p])); // val = val["http"] = {port: 5000}, val = val["port"] = 5000
  
  return val ?? defaultVal;
};

export { getEnviroment, Env };
