// Greeting function
const introduction = (details) => {
  output = console.log(
    `Hello World, this is ${details.fullName} with HNGi7 ID ${details.HNGId} using ${details.language} for stage 2 task `
  );
  return output;
};

// My details object
const myDetails = {
  fullName: "Fuad Olatunji",
  HNGId: "HNG-06089",
  language: "JavaScript",
};

// calling the function
introduction(myDetails);
