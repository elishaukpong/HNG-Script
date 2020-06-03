//This function returns the string
const hngProfile = {
    fullName: 'Barnabas Asha',
    hngId: 'HNG-01877',
    language: 'Javascript',
    loadProfile: function () {
        return `Hello World, this is ${this.fullName} with HNGi7 ID ${this.hngId} using ${this.language} for stage 2 task`
    }
}


console.log(hngProfile.loadProfile());
