let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];
let valuesToStringfiy = [bikes, person, todos];
let bikesJSON = JSON.stringify(bikes);
let personJSON = JSON.stringify(person);
let todosJSON = JSON.stringify(todos);

let jSONcontainer = document.getElementById("jsonContainer");
function onJsonElement(JSONvalues) {
  let pElement = document.createElement("p");
  pElement.classList.add("p-element");
  pElement.textContent = JSONvalues;
  jSONcontainer.appendChild(pElement);
}
onJsonElement(bikesJSON);
onJsonElement(personJSON);
onJsonElement(todosJSON);

// ------------- Greeting Card --------------

let greeting =
  '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

  let jsGreeting=JSON.parse(greeting);
//   {
//   greetText: 'Wishing that the new year will bring joy, love, peace, and happiness to you.', 
//   from: 'Rahul', 
//   to: 'Varakumar'
//   }
// console.log(jsGreeting.greetText)
// console.log(jsGreeting.from)
// console.log(jsGreeting.to)


  let greetingFrom = document.querySelector('.greet-from');
  let greetingTo = document.querySelector('.greet-to');
  let greetingText = document.querySelector('.greet-text');
  
  greetingFrom.textContent=`From : ${jsGreeting.from}`;
  greetingTo.textContent=`To : ${jsGreeting.to}`;
  greetingText.textContent=jsGreeting.greetText;

