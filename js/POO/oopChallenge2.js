// Enunciado: Implemente um sistema de perfis de usuários com diferentes níveis de acesso, onde apenas usuários com nível suficiente podem desbloquear enigmas. Inclua classes para perfis, usuários comuns e agentes secretos, além de métodos para visualizar perfil, subir de nível e tentar acessar enigmas.
class Riddle {
  constructor(minLevel, msg) {
    this.minLevel = minLevel;
    this.msg = msg;
  }

  tryAcess(user) {
    if (user.acessLevel < this.minLevel) {
      console.log("[ACESSO NEGADO] Motivo: Nivel insuficiente!");
    } else {
      console.log(`[ENIGMA DESBLOQUEADO]: ${this.msg}`);
    }
  }
}

class Profile {
  constructor(name) {
    this.name = name;
  }

  acessSystem() {
    throw new Error("Não foi possível verificar o usuário");
  }
}

class User extends Profile {
  constructor(name) {
    super(name);
    this._acessLevel = 1;
  }

  get acessLevel() {
    return this._acessLevel;
  }

  seeProfile() {
    console.log(`User: ${this.name} | Nível: ${this.acessLevel}`);
  }

  levelUp() {
    if (this._acessLevel === 5) {
      console.log("[ACESSO TOTAL LIBERADO]");
    }
    this._acessLevel++;
  }

  acessSystem() {
    console.log("Acesso Limitado");
  }
}

class secretAgent extends User {
  constructor(name) {
    super(name);
    this._acessLevel = 3;
  }

  get acessLevel() {
    return this._acessLevel;
  }

  decipherRiddle() {
    console.log("Enigma decifrado!");
  }

  acessSystem() {
    console.log("Acesso Total");
  }
}

const riddle = new Riddle(4, "Algo se esconde ao leste....");

const user1 = new User("Voldork");
const user2 = new secretAgent("Anomaly Eye");

user2.levelUp();

const profiles = [user1, user2];

riddle.tryAcess(user2);

profiles.forEach((p) => {
  p.acessSystem();
});
