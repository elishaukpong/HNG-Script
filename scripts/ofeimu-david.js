class newIntern{
    constructor(name,id,language){
        this.name=name;
        this.id=id;
        this.language=language;
        return this;
    }
    myProfile(){
       console.log( ` Hi everyone i am: ${this.name} , ${this.id} is my ID and i code with ${this.language}.`)
    }
}
const Me= new newIntern("David", 1234, "Javascript");
Me.myProfile();





