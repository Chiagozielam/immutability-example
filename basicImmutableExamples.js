// initial Shopping cart example
const shoppingCart = [
  { id: 1, name: "Apple", quantity: 2, price: 0.5 },
  { id: 2, name: "Banana", quantity: 3, price: 0.3 },
];


// Add Item following a mutable data structure
const addItem = (cart, newItem) => {
  shoppingCart.push(newItem); // Mutates the original cart
  return cart;
};
const updatedShoppingCart = addItem(shoppingCart, {
  id: 3,
  name: "Orange",
  quantity: 1,
  price: 0.7,
});
console.log(shoppingCart); // Original cart is mutated


// Add item Immutably
const addItemImmutable = (cart, newItem) => {
  return [...cart, newItem]; // This creates a new array
}

const updatedCartImmutable = addItemImmutable(shoppingCart, {
  id: 3,
  name: "Orange",
  quantity: 1,
  price: 0.7,
});
console.log(shoppingCart); // Original cart should remain unchanged
console.log(updatedCartImmutable); // result would be a new cart array with the added item



// Removing an item with immutability
const removeItemImmutable = (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
  }
  
  const cartAfterRemoval = removeItemImmutable(updatedCartImmutable, 1);
  console.log(cartAfterRemoval); // Item with id 1 is removed
  console.log(updatedCartImmutable); // Original updated cart remains unchanged



// Update an item with immutability
const updateItemQuantityImmutable = (cart, itemId, newQuantity) => {
    return cart.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
  }
  
  const cartAfterUpdate = updateItemQuantityImmutable(cartAfterRemoval, 2, 5);
  console.log(cartAfterUpdate); // Quantity of item with id 2 is updated