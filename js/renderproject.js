const projects = [{
    thumb: "../images/projectimg.png",
    title: "Angular Developer Required",
    distance: "less than 2 KMS",
    description: "Consectetur adipiscing lorem ipsum",
    price: 50,
    status: "active"
}, {
    thumb: "../images/projectimg.png",
    title: "Angular Developer Required",
    distance: "less than 2 KMS",
    description: "Consectetur adipiscing lorem ipsum",
    price: 50,
    status: "active"
}, {
    thumb: "../images/projectimg.png",
    title: "Angular Developer Required",
    distance: "less than 2 KMS",
    description: "Consectetur adipiscing lorem ipsum",
    price: 50,
    status: "active"
}, {
    thumb: "../images/projectimg.png",
    title: "Angular Developer Required",
    distance: "less than 2 KMS",
    description: "Consectetur adipiscing lorem ipsum",
    price: 50,
    status: "active"
}, {
    thumb: "../images/projectimg.png",
    title: "Angular Developer Required",
    distance: "less than 2 KMS",
    description: "Consectetur adipiscing lorem ipsum",
    price: 50,
    status: "active"
}, {
    thumb: "../images/projectimg.png",
    title: "Angular Developer Required",
    distance: "less than 2 KMS",
    description: "Consectetur adipiscing lorem ipsum",
    price: 50,
    status: "active"
}, {
    thumb: "../images/projectimg.png",
    title: "Angular Developer Required",
    distance: "less than 2 KMS",
    description: "Consectetur adipiscing lorem ipsum",
    price: 50,
    status: "active"
}, {
    thumb: "../images/projectimg.png",
    title: "Angular Developer Required",
    distance: "less than 2 KMS",
    description: "Consectetur adipiscing lorem ipsum",
    price: 50,
    status: "active"
}, {
    thumb: "../images/projectimg.png",
    title: "Angular Developer Required",
    distance: "less than 2 KMS",
    description: "Consectetur adipiscing lorem ipsum",
    price: 50,
    status: "active"
}, {
    thumb: "../images/projectimg.png",
    title: "Angular Developer Required",
    distance: "less than 2 KMS",
    description: "Consectetur adipiscing lorem ipsum",
    price: 50,
    status: "active"
}]


setTimeout(getProjects, 2000)


// Selecting the container
const projectcontainer = document.querySelector('.projects-view')


async function getProjects() {
    // const res = await axios.get(baseUrl);
    // const feedobj = res.data.feeds

    const currProjects = document.querySelectorAll('.project-card')
        // currProjects.forEach()

    console.log(projects);
    projects.forEach(element => {
        createProject(element)
    });

}



// Creating the component
function createProject(project) {



    // The Project Card contains 2 divs and the 2 sub-divs, The 1st Subdiv contains 2 more divs

    // MAIN DIV
    const projectCard = document.createElement('DIV');
    projectCard.classList.add('project-card');

    projectcontainer.appendChild(projectCard)

    // INNER DIVs
    const descnimg = document.createElement('DIV');
    descnimg.classList.add('desc-img');

    const projectrate = document.createElement('DIV');
    projectrate.classList.add('project-rate');

    projectCard.appendChild(descnimg);


    // Appending Image
    const projectimg = document.createElement('DIV');
    projectimg.classList.add('project-img');
    const thumbnail = document.createElement('IMG')
    thumbnail.src = project.thumb;
    projectimg.appendChild(thumbnail)

    descnimg.appendChild(projectimg)


    // Appending Description Text
    const projectdesc = document.createElement('DIV');
    projectdesc.classList.add('project-desc');

    const projectTitle = document.createElement('H3');
    let Titletext = project.title;
    projectTitle.innerText = Titletext.substring(0, 20) + "..."
    projectdesc.appendChild(projectTitle)

    const projectDescription = document.createElement('P')
    let desctext = project.description.substring(0, 22)
    let distancetext = project.distance
    projectDescription.innerHTML = `<span>${distancetext}</span> ${desctext}… `
    projectdesc.appendChild(projectDescription)

    descnimg.appendChild(projectdesc)

    // Appending Project Rate
    const rateAmt = document.createElement('P');
    rateAmt.innerText = `$${project.price}`;
    projectrate.appendChild(rateAmt);
    const projectStatus = document.createElement('SPAN');
    projectStatus.innerText = project.status;
    projectrate.appendChild(projectStatus);



    projectCard.appendChild(projectrate);
}