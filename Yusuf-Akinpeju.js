function alltext() {
  var user = {
    first_name: "Yusuf",
    last_name: "Akinpeju",
    ID: "HNG-03409",
    language: "JavaScript",
  };

  let texts = `Hello World, this is ${user.last_name} ${user.first_name} with HNGi7 ID ${user.ID} using ${user.language} for stage 2 task`;
  let text2 = JSON.stringify(texts);
  console.log(text2);
}
alltext();
