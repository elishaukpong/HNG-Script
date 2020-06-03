//Make the files in an array so as to display uniquely
let outPut = () => {
    var profile = {
      nameInFull: "Ezeukwu Princewill Chigozie",
      hngi7Id: "HNG-00646",
      languageUsed: "Javascript",
      email: "princewillezeukwu@gmail.com",
    };
    return `Hello World, this is ${profile.nameInFull} with HNGi7 ID ${profile.hngi7Id} and email ${profile.email} using ${profile.languageUsed} for stage 2 task`;
  };
  console.log(outPut());
