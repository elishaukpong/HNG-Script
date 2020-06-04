function Message(fullName, ID, language, ...rest) {
  let output = `Hello world, this is ${fullName} with HNGi7 ID ${ID} and email ${rest[0]} using ${language} for stage 2 task`;
  return output;
}

console.log(Message("Itunu Lamina", "HNG-01371", "JavaScript", "Nix4phun@gmail.com"));
