const Dell = require('./Dell');
const Hp = require('./Hp');
const Razer = require('./Razer');

class ComputerFactory {
  create(brand, id) {
    switch(brand) {
      case 'Dell':
        return new Dell(id);
      case 'Hp':
        return new Hp(id);
      case 'Razer':
        return new Razer(id);
      default:
        throw new Error('Your factory do not produce this brand computer!');
    }
  }
}

module.exports = new ComputerFactory();
