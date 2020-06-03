const myInform =  {
    name : "Ani Stanley",
    id: "HNG-05725",
    email: "anistanley2016@gmail.com",
    language: "Javascript",
};

(function (data){
    let output= `Hello World, this is ${data.name} with HNGi7 ID ${data.id} and email ${data.email} using ${data.language} for stage 2 task`;
    console.log(output);
})(myInform);