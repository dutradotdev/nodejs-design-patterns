const Computer = require('./Computer');
class Dell {
  constructor(id) {
    return new Computer(id, 'XYz', '4GB', '500GB');
  }
}

module.exports = Dell;
