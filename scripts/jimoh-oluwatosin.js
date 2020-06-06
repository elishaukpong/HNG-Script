const finalOutput = () => {
  const myDetails = {
    name: "Oluwatosin Jimoh",
    language: "Javascript",
    id: "HNG-00977",
    email: "jayoluwatosin@gmail.com"
  };
  return `Hello World, this is ${myDetails.name} with HNGi7 ID ${myDetails.id} and email ${myDetails.email} using ${myDetails.language} for stage 2 task`
}

console.log(finalOutput());
