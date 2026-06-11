import Product from "./product.js";
import ShoppingCart from "./shoppingcart.js";

const item1 = new Product('p-01', 'Бездротова миша', 450, 'electronics');
const item2 = new Product('p-02', 'Монітор', 999, 'electronics');

console.log(item1);

const cart = new ShoppingCart()

// cart.addItem(item1)
// cart.addItem(item1, 3)
// cart.addItem(item2, 2)

console.log(cart);
console.log(cart.totalItems);
console.log(cart.totalPrice);

cart.applyDiscount("SUMMER20");
console.log(cart.totalPrice);
