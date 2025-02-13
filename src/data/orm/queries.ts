import { CategoryModel, ProductModel, SupplierModel } from "./models";
import { BaseRepo, Constructor } from "./core";
  
/* 
  The AddQueries function accepts a base class and returns a new class
  that adds the getProducts, getCategories, and getSuppliers methods. 
*/
export function AddQueries<TBase extends Constructor<BaseRepo>>(Base: TBase) {
  return class extends Base {
    getProducts() {
      return ProductModel.findAll({
        include: [
          { model: SupplierModel, as: "supplier" },
          { model: CategoryModel, as: "category" },
        ],
        raw: true,
        nest: true,
      });
    }
    getCategories() {
      return CategoryModel.findAll({ raw: true, nest: true });
    }
    getSuppliers() {
      return SupplierModel.findAll({ raw: true, nest: true });
    }
  };
}
