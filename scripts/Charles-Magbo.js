let lastName = "Magbo";
let firstName = "Charles";
let internId = "HNG-05340";
let languageUsed = "Javascript";

function showMessage() {
    //concatenating using "backticks"
let message = `Hello world, this is ${lastName + " " + firstName + " "} with HNGi7 ID ${internId} using ${languageUsed} for stage 2 task`;

return message;
}
console.log(showMessage());