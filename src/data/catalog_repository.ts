/* 
  The CatalogRepository interface defines methods to query and store 
  objects that implement the Product, Category, and Supplier interfaces.
*/

import {
  Category,
  Product,
  ProductQueryParameters,
  ProductQueryResult,
  Supplier,
} from "./catalog_models";

export interface CatalogRepository {
  getProducts(params?: ProductQueryParameters): Promise<ProductQueryResult>;

  getProductDetails(ids: number[]): Promise<Product[]>;

  storeProduct(p: Product): Promise<Product>;

  getCategories(): Promise<Category[]>;

  storeCategory(c: Category): Promise<Category>;

  getSuppliers(): Promise<Supplier[]>;
  
  storeSupplier(s: Supplier): Promise<Supplier>;
}
