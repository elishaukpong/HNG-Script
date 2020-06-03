//
const myCredentials = {
  firstName: 'Akinlua',
  lastName: 'Bolamigbe Jomiloju',
  HNGi7_ID: 'HNG-04764',
  email: 'bolamigbeakinlua@gmail.com',
  language: 'Javascript',
};
//
const createOutput = (arg) =>
  arg.pertition_1 + arg.pertition_2 + arg.pertition_3;

((credentials) => {
  const pertitions = {
    pertition_1: `Hello World, this is ${credentials.firstName} ${credentials.lastName}`,
    pertition_2: ` with HNGi7 ID ${credentials.HNGi7_ID} and email ${credentials.email} using `,
    pertition_3: `${credentials.language} for stage 2 task`,
  };
  const result = createOutput(pertitions);
  console.log(result);
})(myCredentials);
