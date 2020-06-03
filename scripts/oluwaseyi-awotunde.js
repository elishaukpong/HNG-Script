class MyInfo {
  constructor(name, id, email, language) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.language = language;
  }

};

const info = new MyInfo("Oluwaseyi Awotunde", "HNG-00262", "seyi.juliana@gmail.com", "JavaScript");
console.log(`Hello World, this is ${info.name} with HNGi7 ID ${info.id} and email ${info.email} using ${info.language} for Stage 2 task`);
