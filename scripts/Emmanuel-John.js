const myProfile = {
    greetings: 'Hello world',
    name: 'Emmanuel John',
    email: 'Emmanuelhashy@gmail.com',
    id: 'HNG-03668',
    language: 'JavaScript',
    stage: 2
}

const {greetings, name, email, id, language, stage} = myProfile;
const hngTask = (greetings, name, email, id, language, stage) => {
   console.log(`${greetings}, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage ${stage} task.`); 
}

hngTask(greetings, name, email, id, language, stage);
