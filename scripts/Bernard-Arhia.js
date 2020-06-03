displayInfo = () => {
	let output = "";
	const fullName = "Arhia Bernard";
	const hndId = "HNG-00347";
	const languageChoice = "Javascript";

	output = `Hello world, this is ${fullName} with HNGi7 ID ${hndId} and email bernardarhia@gmail.com using ${languageChoice} for stage 2 task`;
	return output;
};

console.log(displayInfo());
