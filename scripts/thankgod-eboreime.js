const myMessage = () => {
    let details = {
        name: 'Eboreime ThankGod',
        hngi7Id: '02109',
        language: 'javascript',
        email: "eboreimethankgod@gmail.com"

    }
    return `Hello World, this is ${details.name} with HNGI7 ID ${details.hngi7Id} and ${details.email} using ${details.language} for stage 2 task`
}
console.log(myMessage());