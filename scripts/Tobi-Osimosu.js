// TOPIC: Task 2 Challenge
// INSTRUCTION: The script should return the text "Hello World, this is [full name] with HNGi7 ID [ID] using [language] for stage 2 task".

//                    OPTION 1 (Using ES6 arrow function)
// output = (lastName, firstName, middleName, HNGID, email, language) => {
//   console.log(
//     `Hello World, this is ${lastName} ${firstName} ${middleName} with HNGi7 ID HNG-${HNGID} and email ${email} using ${language} for stage 2 task`
//   );
// };

// output(
//   "Osimosu",
//   "Oluwatobiloba",
//   "James",
//   "01133",
//   "osimosutobi@gmail.com",
//   "JavaScript"
// );

//                    OPTION 2 (Using If-else statement and ES6 Template Literals)
let lastName = "Osimosu";
let firstName = "Oluwatobiloba";
let middleName = "James";
let HNGID = "01133";
let email = "osimosutobi@gmail.com";
let language = "JavaScript";

if (lastName && firstName && middleName && HNGID && email && language) {
  console.log(
    `Hello World, this is ${lastName} ${firstName} ${middleName} with HNGi7 ID HNG-${HNGID} and email ${email} using ${language} for stage 2 task`
  );
} else {
  console.log("Error!");
}
