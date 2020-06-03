// function to create message with arguments
function createMessage(fullname, hngid, email, lang){

    // create the message and store it in the message variable
    const message = "Hello World, this is " 
                    + fullname 
                    + " with HNGi7 ID " 
                    + hngid 
                    + " and email "
                    + email
                    + " using " 
                    + lang 
                    + " for stage 2 task";
    
    // Display the message created in the console
    console.log(message);
}

//call the createMessage
createMessage("Chinedu Princewill Ijeomah","HNG-06104", "chinedu.ijeomah@yahoo.com", "JavaScript");