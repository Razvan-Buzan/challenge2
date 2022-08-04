const experience =[
{
    id:"1",
    name:"Endava",
    description:"Intership",
    department:"...",
    company:"",
    startDate:"04/07/2022",
    endDate:"11/09/2022",
 },
{
        id:"2",
        name:"Bosch",
        description:"Working Student",
        department:"...",
        company:"",
        startDate:"01/06/2021",
        endDate:"01/09/2021",
},
{
        id:"3",
        name:"Untold",
        description:"Volunteer",
        department:"...",
        company:"",
        startDate:"03/09/2021",
        endDate:"07/09/2021",
},
]
 /* function generateexperienceCard (experience){
    const experienceCard= document.createElement("div");
    //const experienceName = document.createElement("p");
    experienceName.innerText = experience.name;
    const departmentExp = document.createElement("p");
    departmentExp.innerText = experience.department;
    const descriptionExp = document.createElement("p");
    descriptionExp.innerText = experience.description;
    const showMoreBtn = document.createElement("button");
    showMoreBtn.innerHTML = '<i class="arrow"></i>';
    showMoreBtn.id = "readMoreBtn";
    descriptionExp.classList = "description-experience";
    const companyExp = document.createElement("p");
    companyExp.innerText = experience.company;
    const startDateExp = document.createElement("p");
    startDateExp.innerText = "Start date: " + experience.startDate;
    const endDateExp = document.createElement("p");
    endDateExp.innerText = "End Date: " + experience.endDate;
    
    experienceCard.appendChild(experienceName);
    //experienceField.appendChild(nameExp);
    experienceField.appendChild(departmentExp);
    experienceField.appendChild(companyExp);
    experienceField.appendChild(startDateExp);
    experienceField.appendChild(endDateExp);
    experienceField.appendChild(descriptionExp);
  
    return experienceField;
    
    
    return experienceCard;
}
function populateexperienceContainer(experienceArray){
    const mainParent= document.getElementById("experienceContainer")
    experienceArray.forEach(function(experienceObj, index){
    const userExperience = generateexperienceCard(experienceObj);
    
    mainParent.appendChild(userExperience);
})}

populateexperienceContainer(experience); 
function generateExperienceSection(experience) {
    const experienceField = document.createElement("div");
    experienceField.classList = "experience";
  
    const nameExp = document.createElement("h2");
    nameExp.innerText = experience.name;
    const departmentExp = document.createElement("p");
    departmentExp.innerText = experience.department;
    const descriptionExp = document.createElement("p");
    descriptionExp.innerText = experience.description;
    const showMoreBtn = document.createElement("button");
    showMoreBtn.innerHTML = '<i class="arrow"></i>';
    showMoreBtn.id = "readMoreBtn";
    descriptionExp.classList = "description-experience";
    const companyExp = document.createElement("p");
    companyExp.innerText = experience.company;
    const startDateExp = document.createElement("p");
    startDateExp.innerText = "Start date: " + experience.startDate;
    const endDateExp = document.createElement("p");
    endDateExp.innerText = "End Date: " + experience.endDate;
  
    experienceField.appendChild(nameExp);
    experienceField.appendChild(departmentExp);
    experienceField.appendChild(companyExp);
    experienceField.appendChild(startDateExp);
    experienceField.appendChild(endDateExp);
    experienceField.appendChild(descriptionExp);
  
    return experienceField;
  }
  
  function populateExperienceContainer(experienceElem) {
    const experienceContainer = document.getElementById("container-experience");
  
    experienceElem.forEach(function (experienceObj, index) {
      const experCard = generateExperienceSection(experienceObj);
      experienceContainer.appendChild(experCard);
    });
  } */
  function generateExperienceSection(experience){
  const experienceField = document.createElement("div");
  experienceField.classList = "experience";
  
  const nameExp = document.createElement("h2");
  nameExp.innerText = experience.name;

  const descriptionExp = document.createElement("p");
  descriptionExp.innerText = experience.description;
  
  const departmentExp = document.createElement("p");
  departmentExp.innerText = experience.departament;
  
  const companyExp = document.createElement("p");
  companyExp.innerText= experience.company;
  
  const startDateExp = document.createElement("p");
  startDateExp.innerText = "Start Date:" + experience.startDate;
  
  const endtDateExp = document.createElement("p");
  startDateExp.innerText = "End Date:" + experience.endDate;
  
  experienceField.appendChild(nameExp);
    experienceField.appendChild(departmentExp);
    experienceField.appendChild(companyExp);
    experienceField.appendChild(startDateExp);
    experienceField.appendChild(endDateExp);
    experienceField.appendChild(descriptionExp);
    
    return experienceField;
  }
  function populateExperienceContainer(experienceElem){
  const experienceContainer = document.getElementById("container-experience");
  
  experienceElem.forEach(function(experienceObj,index){
    const experCard = generateExperienceSection(experienceObj);
    experienceContainer.appendChild(experCard);
  })    
  }
  
  
  
  function byDateDay(a, b) {
    const d1 = new Date(a.endDate);
    const d2 = new Date(b.endDate);
    if (d1.getUTCMonth() > d2.getUTCMonth()) {
      return 1;
    } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
      return -1;
    } else {
      return d2.getUTCDate() - d1.getUTCDate();
    }
  }
  populateExperienceContainer(experiences.sort(byDateDay));
  
  const box = document.querySelector(".experience");