const user = {
    firstName: 'Abdulmuqit',
    lastName: 'Shuaib',
    HNGId: 'HNG-02508',
    email: 'horleryeeworler@gmail.com',
    greet() {
        console.log(
            `Hello World, this is ${this.firstName} ${this.lastName} with HNGi7 ID ${this.HNGId} and email ${this.email} using Javascript for stage 2 task`)
    }
};

user.greet();