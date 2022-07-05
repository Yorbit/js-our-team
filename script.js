const teamArray = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic D",
        image: "barbara-ramos-graphic-designer.jpg"
    },
];

for (let index = 0; index < teamArray.length; index++) {

    const newElement = createElement(teamArray[index]);
    appendParent(newElement);
    console.log(teamArray[index]);
}

function createElement(member) {
    const newElement = document.createElement('div');

    newElement.className = ('margin col-4');

    newElement.innerHTML = `<div class= "h-100 card">

            <div class="c-body">
    
            <img class="c-img" src="./img/${member.image}" alt="info">
    
            <h5 class="c-title fw-bold">Name</h5>

            <p class="c-text">${member.name}</p>

            <h5 class="c-title fw-bold">Role</h5>

            <p class="c-text">${member.role}</p>

    </div>`

    return newElement;
}

function appendParent(element) {

    const parentElement = document.getElementById('wrapped-items');

    parentElement.append(element);

    return parentElement;
}