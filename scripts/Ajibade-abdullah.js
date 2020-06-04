let outPut = () => {
  let profile = {
    fullName: "Ajibade abdullah",
    hngId: "HNG-03951",
    Language: "NodeJs",
    email: "ajibadeabd@gmail.com",
  };
  return `Hello World, this is ${profile.fullName} with HNGi7 ID ${profile.hngId} and email ${profile.email} using ${profile.Language} for stage 2 task`;
};
console.log(outPut());
