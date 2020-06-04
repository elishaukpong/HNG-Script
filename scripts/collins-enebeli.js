function hngTask() {
  const intern = {
    fullName: 'Collins Enebeli',
    id: 'HNG-05252',
    language: 'Javascript',
    email: 'collynizy@gmail.com'
  };

  const output = `Hello World, this is ${intern.fullName} with HNGi7 ID ${intern.id} and email ${intern.email} using ${intern.language} for stage 2 task`;

  return output;
}

console.log(hngTask());
