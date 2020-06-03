// Task 2
// The script should return the text "Hello World, this is [full name] with HNGi7 ID [ID] using [language] for stage 2 task".

output = (lastName, firstName, middleName, HNGID, language) => {
  console.log(
    `Hello World, this is ${lastName} ${firstName} with HNGi7 ID HNG-${HNGID} and email osimosutobi@gmail.com using ${language} for stage 2 task`
  );
};

output("Osimosu", "Oluwatobiloba", "James", "01133", "JavaScript");
