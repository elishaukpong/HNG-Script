// create a function that receives first name, last name, id and language parameter
function display(fName, lName, id, email, lang) {
    // The line below returns a string when the function is called
    return `Hello World, this is ${fName} ${lName} with HNGi7 ID ${id} and email ${email} using ${lang} for stage 2 task`;

}

// display the string returned by the display function in the console
console.log(display("Lucas", "Okafor", "HNG-02912", "lucas.matehc@gmail.com", "Javascript"));