const Computer = require('./Computer');

const razer = new Computer(001, 'razerGT', '8GB', '1TB');
const dell = new Computer(002, 'XYz', '4GB', '500GB');
const hp = new Computer(003, 'XYy', '2GB', '300GB');
console.log('razer', razer.showSpecs())
console.log('dell', dell.showSpecs())
console.log('hp', hp.showSpecs())

/*
  Eu posso instanciar um por um desse jeito mas eu sei que os computadores razer
  tem a placa razerGT, 8gb e 1TB de especificações sempre... só mudando o id
  Também sei que os da dell tb tem certas especificações sempre... só mudando o id
  e a mesma coisa com a hp... o que fazer para economizar código?
  Usar o computer como classe para o que for padrão (como se fosse) uma padronização
  de todos os aspectos que um computador deve ter e criar uma classe para cada
  marca de computer!
  Dentro das do construtores da classes da marca, eu retorno um new Computer(...)
  com as propriedades referentes aquelas marcas.
*/
console.log('--------------------------------');
const Razer = require('./Razer');
const Dell = require('./Dell');
const Hp = require('./Hp');

const razer1 = new Razer(001);
const dell1 = new Dell(002);
const hp1 = new Hp(003);

console.log('razer1', razer1.showSpecs())
console.log('dell1', dell1.showSpecs())
console.log('hp1', hp1.showSpecs())


console.log('--------------- Usando Abstract Factory -----------------');
const ComputerFactory = require('./ComputerFactory');

const razerFromFactory = ComputerFactory.create('Razer', 001);
const dellFromFactory = ComputerFactory.create('Dell', 002);
const hpFromFactory = ComputerFactory.create('Hp', 003);
const lalalalal = ComputerFactory.create('LALALLALALLA', 004);
console.log('razerFromFactory', razerFromFactory.showSpecs())
console.log('dellFromFactory', dellFromFactory.showSpecs())
console.log('hpFromFactory', hpFromFactory.showSpecs())
