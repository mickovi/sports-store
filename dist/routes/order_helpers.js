"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* export const createAndStoreOrder = async (
  customer: Customer,
  address: Address,
  cart: Cart
): Promise<Order> => {
  const product_ids = cart.lines.map((l) => l.productId) ?? [];
  const product_details = Object.fromEntries(
    (await catalog_repository.getProductDetails(product_ids)).map((p) => [
      p.id ?? 0,
      p.price ?? 0,
    ])
  );
  const selections = cart.lines.map((l) => ({
    productId: l.productId,
    quantity: l.quantity,
    price: product_details[l.productId],
  }));
  return order_repository.storeOrder({
    customer,
    address,
    selections,
    shipped: false,
  });
}; */
