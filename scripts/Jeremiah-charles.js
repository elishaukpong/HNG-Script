const myDetails = {
  name: "Jeremiah Charles",
  id: "HNG-03830",
  email: "charlesjeremiah89@yahoo.com",
  language: "Javascript",
};

const output = ({ name, id, email, language }) =>
  `Hello World, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task`;

console.log(output(myDetails));
