console.log('---------- Singleton com módulos --------');
const calculator = require('./Calculator');
const calculator1 = require('./Calculator');

// somei 10 no total de calculator 2 vezes
calculator.plus10();
calculator.plus10();

// mas... o calculator1 tem 20?? Isso acontece porque o import de um mesmo módulo é cacheado.
console.log(calculator1.total());

console.log('---------- Singleton com classes --------');
console.log('CalculatorClass.js');
console.log('module.exports = CalculatorClass');
const CalculatorClass = require('./CalculatorClass');
const CalculatorClass1 = require('./CalculatorClass');

// cada instância é alocada em um lugar diferente da memória.
const calcClass1 = new CalculatorClass1();
const calcClass2 = new CalculatorClass();

calcClass1.plus10();
calcClass1.plus20();
calcClass1.plus10();

// instâncias diferentes tem resultados diferentes
console.log(calcClass1.total)  //40
console.log(calcClass2.total)  //0

console.log('---------- module.exports = new CalculatorSingleton() --------');
// se mudarmos a forma de exportar o CalculatorClass (agora CalculatorSingleton)...
// module.exports = new CalculatorSingleton();
const CalculatorSingleton = require('./CalculatorSingleton');
const CalculatorSingleton1 = require('./CalculatorSingleton');
CalculatorSingleton.plus10();
CalculatorSingleton.plus20();
CalculatorSingleton.plus10();
console.log(CalculatorSingleton.total)  //40
console.log(CalculatorSingleton1.total)  //40
// Agora nosso App tem uma unica instancia de calculatorSingleton, por isso
// o total de CalculatorSingleton e CalculatorSingleton1 batem.
// O que é exportado no module.exports é cacheado e agora estamos exportando
// uma instância e não uma classe mais.
