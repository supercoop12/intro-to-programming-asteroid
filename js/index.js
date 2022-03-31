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


