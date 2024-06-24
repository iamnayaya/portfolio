/*===== MENU SHOW =====*/ 
document.addEventListener('DOMContentLoaded', function() {
    // Projects data
   // Sample project data (replace with your actual project data)
const projects = [
    {
        name: "Project 1",
        image: "#",
        description: "Description of Project 1",
        url: "#"
    },
    {
        name: "Project 2",
        image: "#",
        description: "Description of Project 2",
        url: "#"
    },
    // Add more project objects as needed
];

// Function to dynamically create project cards
function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("col-lg-4", "col-md-6", "mb-4");

    projectCard.innerHTML = `
        <div class="card">
            <img src="${project.image}" class="card-img-top" alt="${project.name}">
            <div class="card-body">
                <h5 class="card-title">${project.name}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.url}" class="btn btn-primary">View Project</a>
            </div>
        </div>
    `;

    return projectCard;
}

// Function to render projects
function renderProjects() {
    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectList.appendChild(projectCard);
    });
}

// Call the renderProjects function to populate the project grid
renderProjects();
// Function to fetch testimonials from an API or local data file
async function fetchTestimonials() {
    try {
        // Replace 'your-api-endpoint' with the actual endpoint to fetch testimonials
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        return data.testimonials; // Assuming testimonials are returned as an array
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return []; // Return an empty array if there's an error
    }
}

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
