// variable declaration
const fullName = "Francis Adegbe";
const myHNGID = "HNG-00130";
const scriptingLanguage = "JavaScript";


/* obsfusication */

// object sentence
const sentenceObject = {
  firstPart: "Hello World, this is " + fullName,
  secondPart: " with HNGi7 ID " + myHNGID + " using ",
  thirdPart: scriptingLanguage + " for stage 2 task"
};

// concatenation
const concatenateString  = object => {
  return object.firstPart + object.secondPart + object.thirdPart;
};

// output print in console
const outputStatementString = object => {
  const completeSentence = concatenateString(object);
  console.log(completeSentence);
};

outputStatementString(sentenceObject);

// sample output to console
// console.log("Hello World, this is", fullName, "with HNGi7 ID", myHNGID, "using", scriptingLanguage, "for stage 2 task");
