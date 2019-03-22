const Computer = require('./Computer');
class Razer {
  constructor(id) {
    return new Computer(id, 'razerGT', '8GB', '1TB');
  }
}

module.exports = Razer;
