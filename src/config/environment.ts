export enum Env {
  Development = "development",
  Production = "production",
}
export const getEnviroment = (): Env => {
  const env = process.env.NODE_ENV;
  return env === undefined || env === Env.Development
    ? Env.Development
    : Env.Production;
};
