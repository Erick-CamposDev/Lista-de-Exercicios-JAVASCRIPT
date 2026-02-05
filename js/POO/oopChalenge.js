/*
Exercício:
Implemente uma classe de personagem com atributos, métodos de experiência, evolução de nível e lógica de combate, utilizando getters, setters e herança.
*/
class Character {
  constructor(name, health, attackPower, level, xp, isDead) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.level = level;
    this._xp = xp;
    this.isDead = isDead;
  }

  get xp() {
    return this._xp;
  }

  set xp(xp) {
    if (xp < 0) {
      throw new Error("Xp abaixo de 0!");
    } else {
      this._xp = xp;
    }
  }

  gainXp() {
    this.xp += 100;

    if (this._xp >= 100) {
      console.log(`${this.name} passou de nível!`);
      this.levelUp();
      this._xp = 0;
    }
  }

  levelUp() {
    this.level++;
    this.attackPower += 20;
    this.health += 20;
  }

  attackEnemy(target) {
    if (target.isDead) {
      console.log(`${target.name} está morto`);
      return;
    } else {
      console.log(
        `${this.name} atacou! ${target.name} está com ${target.health} de vida!`,
      );
      target.takeDamage(this.attackPower, this);
    }
  }

  takeDamage(damage, attacker) {
    this.health -= damage;

    if (this.health <= 0) {
      this.health = 0;
      this.isDead = true;
      console.log(`O ${this.name} foi derrotado`);

      attacker.gainXp();
    }
  }

  showMenu() {
    console.log(
      `----STATUS----\n Vida: ${this.health}\n Poder de Ataque: ${this.attackPower}\n Nível Atual: ${this.level}\n XP: ${this._xp}\n-------------`,
    );
  }
}

class Mage extends Character {
  constructor(name, health, mana, attackPower, spellPower, level, xp, isDead) {
    super(name, health, attackPower, level, xp, isDead);
    this.spellPower = spellPower;
    this.mana = mana;
  }

  levelUp() {
    this.level++;
    this.attackPower += 20;
    this.health += 20;
    this.mana += 20;
    this.spellPower += 20;
  }

  regainMana() {
    console.log(
      `${this.name} tomou uma poção de mana! Você recuperou 100 de mana`,
    );
    this.mana += 100;
  }

  castSpell(target) {
    if (this.mana <= 0) {
      console.log(`Não é possível lançar magia! ${this.name} está sem mana!`);
      return;
    }

    if (target.isDead) {
      console.log(`${target.name} está morto`);
      return;
    } else {
      console.log(
        `${this.name} jogou um feitiço! causou ${this.spellPower} de dano!`,
      );

      this.mana -= 25;
      target.takeDamage(this.spellPower, this);
    }
  }

  showMenu() {
    console.log(
      `----STATUS----\n Vida: ${this.health}\n Poder de Ataque: ${this.attackPower}\n Mana: ${this.mana}\n Nível Atual: ${this.level}\n XP: ${this._xp}\n-------------`,
    );
  }
}

const mage = new Mage("Valtozord", 80, 100, 30, 120, 1, 0, false);
const boss = new Character("Gladiar", 800, 35, 1, 0, false);

mage.showMenu();
boss.showMenu();

mage.castSpell(boss);
mage.castSpell(boss);
mage.castSpell(boss);
mage.castSpell(boss);

mage.regainMana();

mage.castSpell(boss);
mage.castSpell(boss);
mage.castSpell(boss);

mage.regainMana(boss);

mage.castSpell(boss);
