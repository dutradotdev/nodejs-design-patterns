class Computer {
  constructor(id, motherboard = 'Any', ram = '4GB', hdSize = '240') {
    this.id = id;
    this.specs = {
      motherboard,
      ram,
      hdSize
    };
  }

  showSpecs() {
    return this;
  }
}

module.exports = Computer;
