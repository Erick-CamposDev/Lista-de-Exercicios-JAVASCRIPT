function itIsAmong(num, min, max, inclusive = false) {
  if (inclusive) {
    if (num >= min && num <= max) {
      return true;
    } else {
      return false;
    }
  }

  if (num > min && num < max) {
    return true;
  } else {
    return false;
  }
}

console.log(itIsAmong(3, 3, 150));
