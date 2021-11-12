// JavaScript source code
const products = [
  { name: "chips", price: 150 },
  { name: "crackers", price: 175 },
  { name: "chocolate bar", price: 75 },
  { name: "gum", price: 25 },
  { name: "soda", price: 125 },
  { name: "water", price: 100 },
  { name: "jerky", price: 500 }
];

function purchase(productList, money, item) {

  let changeTotal = 0;
  let changeInCoins = [];

  if (item < 0 || item >= productList.length) {
    return "Enter a valid product number";
  }
  else if (productList[item].price > money) {
    return "Not enough money to buy this product"
  }
  else {
    changeTotal = money - productList[item].price;
  }

  while (changeTotal > 0) {
    if (changeTotal > 500) {
      changeInCoins.push(500);
      changeTotal -= 500;
    }
    else if (changeTotal >= 200) {
      changeInCoins.push(200);
      changeTotal -= 200;
    }
    else if (changeTotal >= 100) {
      changeInCoins.push(100);
      changeTotal -= 100;
    }
    else if (changeTotal >= 50) {
      changeInCoins.push(50);
      changeTotal -= 50;
    }
    else if (changeTotal >= 20) {
      changeInCoins.push(20);
      changeTotal -= 20;
    }
    else if (changeTotal >= 10) {
      changeInCoins.push(10);
      changeTotal -= 10;
    }
    else {
      changeInCoins.push("Sorry, we don't have coins that small.");
      changeTotal = 0;
    }
  }

  return { product: productList[item].name, change: changeInCoins }
}

console.log(purchase(products, 200, 4));
console.log(purchase(products, 200, 5));
console.log(purchase(products, 300, -1));
console.log(purchase(products, 100, 6));
console.log(purchase(products, 500, 3));
console.log(purchase(products, 75, 2));