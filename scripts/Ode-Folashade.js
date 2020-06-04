// My second HNGi7 Task

const myDetails = {
    surName : "Ode",
    firstName : "Folashade",
    HNGid : "HNG-02713",
    email : "afolaode@gmail.com",
    language : "Javascript",
    output: function(){
        console.log("Hello World, " + "this is " + this.surName + " " + this.firstName + " with HNGi7 ID " + this.HNGid + " and email " + this.email + " using " + this.language + " for stage 2 task");
    }
}

myDetails.output();
