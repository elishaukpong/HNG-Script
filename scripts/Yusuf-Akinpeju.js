function alltext() {
  var user = {
    first_name: "Yusuf",
    last_name: "Akinpeju",
    ID: "HNG-03409",
    language: "JavaScript",
    email: "thekodezilla@gmail.com",
  };

  let texts = `Hello World, this is ${user.last_name} ${user.first_name} with HNGi7 ID ${user.ID} and email ${user.email} using ${user.language} for stage 2 task`;
  let text2 = JSON.stringify(texts);
  let noString = eval(text2);
  console.log(noString);
}
alltext();
