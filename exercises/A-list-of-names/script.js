function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

arrayOfPeople.forEach((person) => {
  let name = document.createElement("h1");
  content.appendChild(name);
  name.innerText = "my name is " + person.name;

  let job = document.createElement("h2");
  content.appendChild(job);
  job.innerText = "my job is " + person.job;
});
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
