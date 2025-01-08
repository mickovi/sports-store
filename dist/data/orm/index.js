"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogRepoImpl = void 0;
const core_1 = require("./core");
const queries_1 = require("./queries");
const storage_1 = require("./storage");
// The process of creating a mixin starts by calling the function 
// that adds the query methods to the BaseRepo class.
const RepoWithQueries = (0, queries_1.AddQueries)(core_1.BaseRepo);
// The result is a class that combines the base features and the 
// query methods, and this is passed to the function that adds the 
// storage methods.
const CompleteRepo = (0, storage_1.AddStorage)(RepoWithQueries);
//The result is a class that defines all the methods and can be instantiated 
// with the new keyword. The combined class can be instantiated and used as an 
// implementation of the CategoryRepository interface.
exports.CatalogRepoImpl = CompleteRepo;
