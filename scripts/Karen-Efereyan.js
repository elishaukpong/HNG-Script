function MoveToStage2(name, id, language) {
  (this.name = name), (this.id = id), (this.language = language);
  console.log(
    `Hello World! This is ${name} with HNG ID ${id} using ${language} for stage2 task`
  );
}

const karen = MoveToStage2(
  "Efereyan Karen Simisola",
  "HNG-01050",
  "Javascript"
);
