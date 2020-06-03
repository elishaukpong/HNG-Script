let profile = {firstName: "Sunday", lastName:"Okoromi", hngId: "HNG-03987", language: "Javascript",
  fullName: function() {
    return  "Hello World, " + "this is " + this.firstName + " " + this.lastName + " with HNGi7 ID " + this.hngId + " using " + this.language + " for stage 2 task";
}

}; 

console.log(profile.fullName());
