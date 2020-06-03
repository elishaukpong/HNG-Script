// Task 2
// The script should return the text "Hello World, this is [full name] with HNGi7 ID [ID] using [language] for stage 2 task".

output = (lastName, firstName, middleName, HNGID, email, language) => {
  console.log(
    `Hello World, this is ${lastName} ${firstName} ${middleName} with HNGi7 ID HNG-${HNGID} and email ${email} using ${language} for stage 2 task`
  );
};

output(
  "Osimosu",
  "Oluwatobiloba",
  "James",
  "01133",
  "osimosutobi@gmail.com",
  "JavaScript"
);
