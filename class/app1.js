var cart = [
  {
    name: "ice cream",
    Price: 120,
  },
  {
    name: "ice cream1",
    price: 500,
  },
  {
    name: "ice cream2",
    price: 200,
  },
  {
    name: "ice cream 3",
    price: 155,
  },
  {
    name: "ice cream4",
    price: 35,
  },
];
var p = 0;
for (var i = 0; i < cart.length; i++) {
  p += cart[i].price;
}
console.log(p);
