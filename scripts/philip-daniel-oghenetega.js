const person = {
  name: 'Philip Daniel Oghenetega',
  hngID: 'HNG-02634',
  language: 'JavaScript',
  email: 'oghenetegaphilip@gmail.com'
}
const values = `Hello World, this is ${person.name} with HNG ID: ${person.hngID} using ${person.language} for stage 2 task.${person.email}`;
const p = document.createElement('p');
  p.appendChild(document.createTextNode(values));
  document.body.appendChild(p);
console.log(values);