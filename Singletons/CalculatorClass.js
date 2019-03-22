class CalculatorClass {
  constructor() {
    this._total = 0;
  }

  plus10() {
    this._total += 10;
  }

  plus20() {
    this._total += 20;
  }

  minus30() {
    this._total -= 30;
  }

  get total() {
    return this._total;
  }
}

module.exports = CalculatorClass;
