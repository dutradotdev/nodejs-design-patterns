Singletons

Singletons são classes/objetos que podem ter apenas uma única instância com um único
ponto de acesso.

Pode ter um uso interessante em classes que não mudam o estado da sua aplicação,
como por exemplo logs e credenciais. Como é feita a instância da classe apenas uma vez
pode ocorrer um ganho de memória. Mas cuidado! Isso não quer dizer que é para usar sempre.
Inclusive existem programadores que consideram o singleton um antipattern.

No Node.js, um exemplo de Singleton é o module.exports.
O sistema de módulos do Node.js cacheia os módulos.
Quando você exporta algo no Node e importa em outro arquivo, o próprio
Node.js cacheia o módulo quando o require() é usado.
Logo, não importa quantos arquivos chamarem essa classe, ela sempre
terá uma única instância cacheada.

Quando você usar nomes inconsistentes em um OS case insentitive, o módulo não
se comportará como um singleton porque será cacheado em uma instância separada.
Exemplo:
const calculator = require('./Calculator');
const calculator1 = require('./CALCULATOR');

Quando você trabalha com classes, instanciar uma classe antes de exportar para fora
do módulo resulta em um singleton:
module.exports = new Calculator();

Se você não exportar dessa forma, dentro do arquivo que você está fazendo import
você terá de instanciar a classe e aí você não compartilha mais a mesma instância
da Classe.

Referências:
https://pt.stackoverflow.com/questions/18860/por-que-n%C3%A3o-devemos-usar-singleton
https://medium.com/@maheshkumawat_83392/node-js-design-patterns-singleton-pattern-series-1-1e0ab71e3edf
https://www.opus-software.com.br/singleton-design-pattern/
https://www.packtpub.com/web-development/nodejs-design-patterns-video
