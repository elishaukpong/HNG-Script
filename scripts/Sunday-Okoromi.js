let profile = {firstName: "Sunday",  middleName: "Victor", lastName:"Okoromi", hngId: "HNG-03987",  email:"okoromivictorsunday@gmail.com", language: "Javascript",
  fullName: function() {
    return  "Hello World, " + "this is " + this.firstName + " " + this.middleName + " " + this.lastName + " with HNGi7 ID "  + this.hngId + " and email " + this.email + " using " + this.language + " for stage 2 task";
}

}; 

console.log(profile.fullName());
