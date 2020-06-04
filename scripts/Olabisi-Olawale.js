const intern = {
firstName:"Olabisi",
lastName :"Olawale",
internId:"HNG-00458",
language: "JavaScript",
email: "ejiolawale4@gmail.com"
}
function displayMessage(){
	const message = `Hello World, this is ${intern.firstName + " " + intern.lastName} with HNGi7 ID ${intern.internId} and email ${intern.email} using ${intern.language} for stage 2 task`;
	return message;
}
console.log(displayMessage());
