const user = {
  fullName: "Omogbare Sikpojie",
  id: "HNG-00289",
  email: "raymondomon@yahoo.com",
  language: "JavaScript",
  message() {
    console.log(
      `Hello World, this is ${this.fullName} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task.`
    );
  },
};

user.message();
