const myProfile = {
    greetings: 'Hello world',
    name: 'Emmanuel John',
    id: 'HNG-03668',
    language: 'JavaScript',
    stage: 2
}

const {greetings, name, id, language, stage} = myProfile;
const hngTask = (name, id, language, stage) => {
    return `${greetings}, this is ${name} with HNGi7 ID ${id} using ${language} for stage ${stage} task.`
}

hngTask(greetings, name, id, language, stage);
