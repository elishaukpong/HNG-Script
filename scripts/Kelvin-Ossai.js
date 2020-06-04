class Person {
  constructor(fullName, id, email, programmingLanguage) {
    this.fullName = fullName;
    this.id = id;
    this.email = email;
    this.programmingLanguage = programmingLanguage;
  }

  introduction() {
    return `Hello World, this is ${this.fullName} with HNGi7 ID ${this.id} and email ${this.email} using ${this.programmingLanguage} for stage 2 task`;
  }
}

let newPerson = new Person(
  "Kelvin Ossai",
  "HNG-00849",
  "ifeanyiko4u@gmail.com",
  "JavaScript"
);

console.log(newPerson.introduction());
