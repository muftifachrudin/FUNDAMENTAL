/////////////////
/* INHERITANCE */
/////////////////

class Player {
  constructor(name, nickname, nationality) {
    this.name = name;
    this.nickname = nickname;
    this.nationality = nationality;
  }
  intro() {
    console.log(`Hello, my name is ${this.nickname}`);
  }
}

// Dengan extends ke Class Player
// Semua Properties dan methods milik Player akan diturunkan ke casualPlayer
class casualPlayer extends Player {
  constructor(name, nickname, nationality, job) {
    // Memanggil contructor milik player
    super(name, nickname, nationality);
    this.job = job;
  }
  myJob() {
    console.log(`I'm not pro player so i have a job, that is ${this.job}`);
  }
}

class proPlayer extends Player {
  constructor(name, nickname, nationality, team) {
    super(name, nickname, nationality);
    this.team = team;
  }
  myTeam() {
    console.log(`i'm pro player so i have a team, that is ${this.team}`);
  }
}

const dendi = new Player("Danil Ishutin", 30, "Ukraine", "Captain", "B8");
dendi.intro();

const kuroky = new proPlayer("Kuro Salehi", 28, "Germany", "Captain", "Nigma");
kuroky.intro();
kuroky.myTeam();

const tanjirou = new casualPlayer("Tanjirou", "Tanji", "Japan", "Swordman");
tanjirou.intro();
tanjirou.myJob();
