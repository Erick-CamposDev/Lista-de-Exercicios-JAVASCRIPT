function createCharacter(name, health, mana, damage) {
  return {
    name,
    health,
    mana,
    damage,

    attack(target) {
      target.receiveDamage(this.damage);
      console.log(
        `${this.name} atacou ${target.name}, ${target.name} está com ${target.health} de vida!`
      );
    },

    receiveDamage(value) {
      this.health -= value;

      if (this.health <= 0) {
        this.health = 0;
        console.log(`${this.name} morreu!`);
      }
    },

    getHealth() {
      return this.health;
    },
  };
}

const player1 = createCharacter("Baltazar", 100, 70, 15);
const player2 = createCharacter("Partlort", 120, 65, 9);

player1.attack(player2);
