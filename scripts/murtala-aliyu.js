const firstName = "Aliyu";
const lastName = "Murtala";
const languageUsed = "javascript";
const internId = "HNG-00925";
const email = "talktoaliyu@gmail.com"

function displayMessage(){
    const message = `Hello World, this is ${lastName} ${firstName} with HNGi7 ID ${internId} and email ${email} using ${languageUsed} for stage 2 task.`
    
    return message;
}

console.log(displayMessage());