//Object
var profile = {firstName: "Stephen", lastName:"Emmanuel", hngId: "HNG-06244",  email:"emmanuelstephen024@gmail.com", language: "Javascript",
  fullName: function() {
    return  "Hello World, " + "this is " + this.firstName + " " + this.lastName + " with HNGi7 ID "  + this.hngId + " and email " + this.email + " using " + this.language + " for stage 2 task";
}

}; 
//Prints
console.log(profile.fullName());
