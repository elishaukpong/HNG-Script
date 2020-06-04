const firstProgramString = "Hello World";
const firstName = "Adeyosola";
const lastName = "Mustapha";
const hngID = "HNG-05255";
const email = "adeyossy1@gmail.com";
const language = "JavaScript";

const template = `${firstProgramString}, this is ${firstName} ${lastName} with `;
const templateContd = `HNGi7 ID ${hngID} and email ${email} using `;
const templateEnd = `${language} for stage 2 task`;

const scriptString = template.concat(templateContd, templateEnd);

const refinedRegEx = /(\w+,?-?@?\w*\.?\w*\s)+\w+/;
if(refinedRegEx.test(scriptString)){
    console.log(scriptString);
}