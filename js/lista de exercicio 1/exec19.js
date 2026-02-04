function restaurantMenu(code, amount) {
  switch (code) {
    case 100:
      return amount * 3;
    case 200:
      return amount * 4;
    case 300:
      return amount * 5.5;
    case 400:
      return amount * 7.5;
    case 500:
      return amount * 3.5;
    case 600:
      return amount * 2.8;
  }
}

console.log(restaurantMenu(100, 4));
