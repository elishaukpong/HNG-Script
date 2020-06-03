let lastName = "Magbo";
let firstName = "Charles";
let internId = "HNG-05340";
let languageUsed = "Javascript";
let emailUsed = "Magboelochukwu@gmail.com";

function showMessage() {
  //concatenating using "backticks"
  let message = `Hello World, this is ${
    lastName + " " + firstName
  } with HNGi7 ID ${internId} and email ${emailUsed} using ${languageUsed} for stage 2 task`;

  return message;
}
console.log(showMessage());
