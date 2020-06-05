const myData = {
    fullName:"Temitope Emmanuel Ojo",
    Id:"HNG-01398",
    email:"temitopeojo0@gmail.com",
    language:"Javascript"
}

const greetWorld = (obj) => {
     console.log(`Hello World, this is ${obj.fullName} with HNGi7 ID ${obj.Id} and email ${obj.email} using ${obj.language} for stage 2 task`)
}
greetWorld(myData)