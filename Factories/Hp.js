const Computer = require('./Computer');
class Hp {
  constructor(id) {
    return new Computer(id, 'XYy', '2GB', '300GB');
  }
}

module.exports = Hp;
