// declare user variables
const fullName = "Bolarinwa Owuogba";
const myHNGID = "HNG-04092";
const scriptingLanguage = "JavaScript";
const myValidEmail = "bhorlarinwah@gmail.com";


/* make code unique by obfusication because current code pattern is too simple */

// create sentence object
const sentenceObject = {
  firstPart: "Hello World, this is " + fullName,
  secondPart: " with HNGi7 ID " + myHNGID,
  thirdPart: " and email " + myValidEmail + " using ",
  fourthPart: scriptingLanguage + " for stage 2 task"
};

// concatenate sentence object values and return complete sentence
const concatenateString  = object => {
  return object.firstPart + object.secondPart + object.thirdPart + object.fourthPart;
};

// print complete sentence to console
const outputStatementString = object => {
  const completeSentence = concatenateString(object);
  console.log(completeSentence);
};

outputStatementString(sentenceObject);

// sample output to console
// console.log("Hello World, this is", fullName, "with HNGi7 ID", myHNGID, "using", scriptingLanguage, "for stage 2 task");
