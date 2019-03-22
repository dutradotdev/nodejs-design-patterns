let total = 0;
let Calculator = {
  plus10() {
    total += 10;
  },
  plus20() {
    total += 20;  
  },
  minus30() {
    total -= 30;
  },
  total() {
    return total;
  }
};

module.exports = Calculator;