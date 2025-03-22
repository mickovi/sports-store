import { CatalogRepository } from "../catalog_repository";
import { BaseRepo } from "./core";
import { AddQueries } from "./queries";
import { AddStorage } from "./storage";
import { AddOrderQueries } from "./order_queries";
import { AddOrderStorage } from "./order_storage";

// The process of creating a mixin starts by calling the function
// that adds the query methods to the BaseRepo class.
// const RepoWithQueries = AddQueries(BaseRepo);

// The result is a class that combines the base features and the
// query methods, and this is passed to the function that adds the
// storage methods.
// const CompleteRepo = AddStorage(RepoWithQueries);

//The result is a class that defines all the methods and can be instantiated
// with the new keyword. The combined class can be instantiated and used as an
// implementation of the CategoryRepository interface.
// export const CatalogRepoImpl = CompleteRepo;

const CatalogRepo = AddStorage(AddQueries(BaseRepo));
const RepoWithOrders = AddOrderStorage(AddOrderQueries(CatalogRepo));
export const CatalogRepoImpl = RepoWithOrders;
