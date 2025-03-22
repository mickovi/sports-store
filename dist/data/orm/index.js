"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogRepoImpl = void 0;
const core_1 = require("./core");
const queries_1 = require("./queries");
const storage_1 = require("./storage");
const order_queries_1 = require("./order_queries");
const order_storage_1 = require("./order_storage");
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
const CatalogRepo = (0, storage_1.AddStorage)((0, queries_1.AddQueries)(core_1.BaseRepo));
const RepoWithOrders = (0, order_storage_1.AddOrderStorage)((0, order_queries_1.AddOrderQueries)(CatalogRepo));
exports.CatalogRepoImpl = RepoWithOrders;
