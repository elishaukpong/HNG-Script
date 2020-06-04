const person = {
  name: 'Edori Atiri',
  ID: 'HNG-00398',
  language: 'Javascript',
  email: 'edoriatiri@gmail.com'
};

const docs = `Hello World, this is ${person.name} with HNGi7 ID ${person.ID} and email ${person.email} using ${person.language} for stage 2 task.`;

function pass() {
  console.log(docs);
}

pass();
