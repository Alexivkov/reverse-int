module.exports = function reverse (n) { 
    let sum = 0;
    if (n < 0) {
        n = -n;
    }
    while(n > 0) {
      sum = (sum * 10) + (n % 10);//7 75
      n = Math.floor(n / 10);
  }  
  return sum;
}
