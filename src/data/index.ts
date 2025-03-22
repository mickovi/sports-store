import { CatalogRepository } from "./catalog_repository";
import { CatalogRepoImpl } from "./orm";
import { OrderRepository } from "./order_repository";

// export const catalog_repository: CatalogRepository = new CatalogRepoImpl();

const repo = new CatalogRepoImpl();

export const catalog_repository: CatalogRepository = repo;
export const order_repository: OrderRepository = repo;
