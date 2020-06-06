var firstName = "Iniobong";
var lastName = "Duff";
var fullName = firstName + " " + lastName; // value is 'Iniobong Duff'
var id = "HNG-01913";
var email = "Duffdev001@gmail.com";
var language = "JavaScript";

function welcome() {
  return `Hello World, this is ${fullName} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task`;
}
console.log(welcome());
