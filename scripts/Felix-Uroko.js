// generic function of my details
var Mydetails = () => {
    // an arrary of me
    var aboutMe = {
      myNameUpdate: "Felix Uroko",
      Hng_Id: "HNG-04318",
      languageChoice: "Javascript",
      email: "talk2felix841@gmail.com"
    };
    // expected output
    return `Hello World, this is ${aboutMe.myNameUpdate} with HNGi7 ID ${aboutMe.Hng_Id} and email ${aboutMe.email} using ${aboutMe.languageChoice} for stage 2 task`;
    ;
  };
  console.log(Mydetails());