

var myInfo = class 
{
    constructor(myName, myId, myEmail, pLanguage)
    {
    	this.myName = myName;
    	this.myEmail = myEmail;
    	this.myId = myId;
    	this.pLanguage = pLanguage;
    }

    get info() 
    {
    	return this.displayInfo();
    }

	displayInfo() 
	{
		console.log(`Hello World, This is ${this.myName} with HNGI7 ID ${this.myId} and email ${this.myEmail} using ${this.pLanguage} for stage 2 task`)
	}

}
const joshua = new myInfo("Zephaniah Joshua", "HNG-06681", " zephaniahk333@gmail.com", "JavaScript");
console.log(joshua.info);

