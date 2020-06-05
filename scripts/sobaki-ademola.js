class Intern {
  constructor(name, id, email, language) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.language = language;
  }
  getInfo() {
    console.log(
      `Hello World, this is ${this.name} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task`
    );
  }
}

const name = 'Sobaki Ademola';
const id = 'HNG-00190';
const email = 'demolasobaki@gmail.com';
const language = 'javascript';

const demola = new Intern(name, id, email, language);

demola.getInfo();
