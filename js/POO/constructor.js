function person(name) {
  this.name = name;
  this.speak = () => console.log(`Olá meu nome é ${this.name}`);
}

const p1 = new person("Alex");

p1.speak();
