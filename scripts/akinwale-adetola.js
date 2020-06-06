// “Hello World, this is [full name] with HNGi7 ID [ID] using [language] for stage 2 task”
const fullName  = "Akinwale ADETOLA",
      hngID     = "HNG-03515",
      email     = "hackinwale.developer@gmail.com",
      language  = "javascript",
      message   = `Hello World, this is ${fullName} with HNGi7 ID ${hngID} and email ${email} using ${language} for stage 2 task`;

function displayMessage(msg){
  if(msg.length > 0)
    console.log(msg);
}

displayMessage(message);

