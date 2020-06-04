//Mark:- Check Inputted HNG ID, Full Name & Language and return Text
const displayMessage = (hngID, fullName, language, email) => {
  console.log(`Hello World, this is ${fullName} with HNGi7 ID ${hngID} and email ${email} using ${language} for stage 2 task`);
};

//Mark:- Breaking down the entries required
const fullName = 'Oluwadamilola Adediran';
const hngID = "HNG-02794";
const language = "Javascript";
const email= "dammyadediran94@gmail.com"

//Mark: - Run
displayMessage(hngID, fullName, language, email);
