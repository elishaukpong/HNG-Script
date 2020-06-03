class MyInfo {
  constructor(name, id, language) {
    this.name = name;
    this.id = id;
    this.language = language;
  }

}

const info = new MyInfo("Oluwaseyi Awotunde", "HNG-00262", "JavaScript");
console.log(`Hello World, this is ${info.name} with HNGi7 ID ${info.id} using ${info.language} for Stage 2 track`);
