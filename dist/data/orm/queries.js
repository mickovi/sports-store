"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddQueries = AddQueries;
const models_1 = require("./models");
const sequelize_1 = require("sequelize");
/*
  The AddQueries function accepts a base class and returns a new class
  that adds the getProducts, getCategories, and getSuppliers methods.
*/
function AddQueries(Base) {
    return class extends Base {
        async getProducts(params) {
            const opts = {};
            if (params?.page && params.pageSize) {
                opts.limit = params?.pageSize;
                opts.offset = (params.page - 1) * params.pageSize;
            }
            if (params?.searchTerm) {
                const searchOp = { [sequelize_1.Op.like]: "%" + params.searchTerm + "%" };
                opts.where = {
                    [sequelize_1.Op.or]: { name: searchOp, description: searchOp },
                };
            }
            if (params?.category) {
                opts.where = {
                    ...opts.where,
                    categoryId: params.category,
                };
            }
            const result = await models_1.ProductModel.findAndCountAll({
                include: [
                    { model: models_1.SupplierModel, as: "supplier" },
                    { model: models_1.CategoryModel, as: "category" },
                ],
                raw: true,
                nest: true,
                ...opts,
            });
            const categories = await this.getCategories();
            return { products: result.rows, totalCount: result.count, categories };
        }
        getCategories() {
            return models_1.CategoryModel.findAll({ raw: true, nest: true });
        }
        getSuppliers() {
            return models_1.SupplierModel.findAll({ raw: true, nest: true });
        }
    };
}
