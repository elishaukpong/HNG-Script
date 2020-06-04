const Me = {
  name: 'Oscar Ekeyekwu',
  id: 'HNG-05334',
  email: 'oscarekeyekwu@gmail.com',
  lang: 'JavaScript',
};
((me) => {
  const output = `Hello World, this is ${me.name} with HNGi7 ID ${me.id} and email ${me.email} using ${me.lang} for Stage 2 task`;
  console.log(output);
})(Me);
