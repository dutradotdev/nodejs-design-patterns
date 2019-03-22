Factories - Generic Interface for Creating Objects

"O Pattern Factory define uma interface para criação de um objeto, mas deixa
as subclasses decidirem que classe devem instanciar".
- GoF in Design Patterns: Elements of Reusable Object-Oriented Software.

Factory, também conhecida como Virtual Constructor Pattern, define uma interface para pré-configurar
um objeto. Com isso, o código fica limpo e resiliente, além de fácil manutenção.
Esse método é muito útil quando formos escrever nossos npm packages para uso público.


The abstract factory pattern
Esse pattern te permite "fabricar" similares ou objetos relacionados.
No caso do nosso código, criamos computadores com Factories.
Agora, criaremos a classe ComputerFactory que decidirá de qual marca será o computador criado
com base na marca que eu passar por parâmetro.

Referências:
https://www.packtpub.com/web-development/nodejs-design-patterns-video
https://codehandbook.org/understanding-factories-design-pattern-in-node-js/
