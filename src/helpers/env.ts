import { Env, getEnviroment } from '../config';

export const isDevelopment = (value: any) => {
  return getEnviroment() === Env.Development;
}