import { List, Map } from 'immutable';

// Create an immutable list of items
let cart = List([
  Map({ id: 1, name: 'Apple', quantity: 2, price: 0.5 }),
  Map({ id: 2, name: 'Banana', quantity: 3, price: 0.3 })
]);

// Add an item to the cart
cart = cart.push(Map({ id: 3, name: 'Orange', quantity: 1, price: 0.7 }));

// Update an item in the cart
cart = cart.update(
  cart.findIndex(item => item.get('id') === 2),
  item => item.set('quantity', 5)
);

// Remove an item from the cart
cart = cart.filter(item => item.get('id') !== 1);

console.log(cart.toJS()); // Convert to native JavaScript object for viewing
