class Person {
  constructor(fullname, id, email, language) {
    this.fullname = fullname;
    this.id = id;
    this.email = email;
    this.language = language;
  }
  greeting() {
    console.log(`Hello World, this is ${this.fullname} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task`);
  }
}

const Yemi = new Person("Akinyemi Oluwayemisi", "HNG-02253", "akinyemitiana77@gmail.com", "javascript");

Yemi.greeting();
