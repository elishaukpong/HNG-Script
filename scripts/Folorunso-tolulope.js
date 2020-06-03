const user = {
  name: "Folorunso Tolulope",
  Id: "HNG-00403",
  language: "NodeJs",
  email: "tolufolorunso@yahoo.com",
};

function tolu() {
  const { name, Id, language, email } = user;
  console.log(
    `Hello World, this is ${name} with HNGi7 ID ${Id} and email ${email} using ${language} for stage 2 task`
  );
}

tolu();
