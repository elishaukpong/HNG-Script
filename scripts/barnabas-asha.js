//This function returns the string
const hngProfile = {
    fullName: 'Barnabas Asha',
    hngId: 'HNG-01877',
    language: 'Javascript',
    email: 'barnabee58@gmail.com',
    loadProfile: function () {
        return `Hello World, this is ${this.fullName} with HNGi7 ID ${this.hngId} using ${this.language} and email ${this.email} for stage 2 task`
    }
}


console.log(hngProfile.loadProfile());
