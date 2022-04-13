var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');

var copyright = document.createElement("p");
copyright.innerHTML="Anthonya Cooper "+thisYear 
footer.appendChild(copyright);

let skills = ["JavaScript","GitHub","R","HTML - in progress"];

let skillsSection = document.getElementById("skills")

let skillsList = skillsSection.querySelector("ul")

for (i=0; i<skills.length; i++){

  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

let messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function (event){
  event.preventDefault();
  let name = event.target.name;
  let email = event.target.email;
  let message = event.target.message;
  console.log(name.value +" "+ email.value +" "+ message.value)

  
  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${email.value}">${name.value}</a> <span>${message.value}</span>`
 
  messageList.appendChild(newMessage);
  
  let removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerHTML= "remove"
  
  removeButton.addEventListener("click", function (event){
    let entry = event.target.parentNode;
    entry.remove();
    
  })
  
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});

