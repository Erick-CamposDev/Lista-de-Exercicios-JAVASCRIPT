/*
Exercício:
Implemente uma função construtora para criar objetos pessoa, onde cada pessoa possui um nome e um método para exibir uma mensagem de apresentação.
*/
function person(name) {
  this.name = name;
  this.speak = () => console.log(`Olá meu nome é ${this.name}`);
}

const p1 = new person("Alex");

p1.speak();
