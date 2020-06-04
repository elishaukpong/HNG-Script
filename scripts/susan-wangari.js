// a javascript code
function showContent(firstName,lastName,id,emailAddress,language){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.emailAddress = emailAddress;
    this.language = language;
}
content = new showContent("Susan","Wangari","02129","susanwangari810@gmail.com","JavaScript")
console.log("Hello World,this is " + content.firstName + " " + content.lastName + " with HNGi7 ID " + content.id + " " + "and" + " " + content.emailAddress + " " + "using" +" "+ content.language + " for stage 2 task");
