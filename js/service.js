// Projects Data
const projects = [
    {
  title: "Groupe Saisons",
  description: "A fully responsive front-end website designed for a company",
  details: {
    overview: "Groupe Saisons is a modern, responsive website. I had this project as an opportunity of freelance",
    roles: [
      {
        role: "Visitors",
        desc: "They can browse the website"
      }
    ],
    highlights: [
      "Fully responsive design for mobile, tablet, and desktop",
      "Modern UI with smooth animations and clean layout",
      "Fast loading and SEO-friendly structure"
    ]
  },
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  images: ["./img/groupesaisonslogo.png", "./img/gs1.png", "./img/gs2.png", "./img/gs3.png", "./img/gs4.png", "./img/gs5.png"],
  link: "/groupesaisons.html"
},
  {
    title: "Orientation+",
    description: "A career guidance website that helps Tunisian high school graduates choose their university path. I had this project as my Summer Internship Project",
    details: {
      overview: "Orientation+ is a comprehensive career guidance platform designed to help Tunisian high school graduates choose the university path that best fits their academic profile and interests.",
      roles: [
        {
          role: "Students",
          desc: "They can input their grades, explore faculties, and receive personalized recommendations based on their eligibility and interests."
        },
        {
          role: "Admin",
          desc: "The general administrator oversees the system, manages accounts, monitors activity, and ensures smooth functioning."
        },
        {
          role: "Faculty Admin",
          desc: "Faculty-level admins manage admission criteria, update program rules, and maintain records specific to their departments."
        }
      ],
      highlights: [
        "Automated score calculation & faculty filtering",
        "Interactive dashboards for admins",
        "Personalized recommendations for students"
      ]
    },
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Leaflet.js"],
    images: ["./img/orientationlogo.png", "./img/or1.png", "./img/or2.png","./img/or3.png","./img/or4.png","./img/or5.png"],
    link: "/orientation.html"
  },

  {
    title: "TravelMate",
    description: "A web application that allows travelers to personalize their itinerary and visualize optimized routes on a map. I had this project as my Final Year Project",
    details: {
      overview: "TravelMate is a smart travel planning web app that allows users to create customized itineraries by selecting departure, arrival, and intermediate cities. It automatically displays optimized routes and points of interest using Leaflet maps.",
      roles: [
        {
          role: "Traveler",
          desc: "Can personalize their trip by choosing cities to visit, view suggested routes, and explore nearby attractions."
        },
        {
            role: "Admin",
            desc: "The general administrator oversees the system, manages accounts, cities and insights"
        }
      ],
      highlights: [
        "Dynamic itinerary planning",
        "Interactive Leaflet map integration",
        "Optimized route visualization"
      ]
    },
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Leaflet.js"],
    images: ["./img/travel mate.png", "./img/tra1.png", "./img/tra2.png", "./img/tra3.png", "./img/tra4.png", "./img/tra5.png","./img/travelmate.png","./img/tra6.png"],
    link: "/travelmate.html"
  },

  {
    title: "BeTeck",
    description: "An e-commerce platform for IT products with inventory, invoices, and quotations management. I did this project as my End of Studies Project",
    details: {
      overview: "BeTeck is a modern e-commerce platform for selling IT products, designed to help businesses manage inventory, orders, invoices, and quotations efficiently through an intuitive dashboard.",
      roles: [
        {
          role: "Customer",
          desc: "Can browse IT products, view detailed specs, and place orders or request quotations."
        },
        {
          role: "Admin",
          desc: "Manages product inventory, handles customer orders, and generates invoices and quotes."
        }
      ],
      highlights: [
        "Inventory and stock management",
        "Automated invoice and quotation generation",
        "Modern Angular dashboard"
      ]
    },
    technologies: ["Angular", "Ruby"],
    images: ["./img/beteck.png", "./img/be1.jpg", "./img/be2.jpg", "./img/be3.jpg", "./img/be4.jpg", "./img/be5.jpg", "./img/be6.jpg", "./img/be7.jpg", "./img/be8.jpg"],
    link: "/BeTeck.html"
  },

  {
    title: "TravelMatePocket",
    description: "A mobile app that allows travelers to share posts and experiences with real-time updates using Firebase. I had this project as an academic project for android",
    details: {
      overview: "TravelMatePocket is a social mobile application that connects travelers through shared experiences. It allows users to post photos, write travel stories, and engage with others in real time.",
      roles: [
        {
          role: "Traveler",
          desc: "Can share posts, comment, like, and follow other users' adventures."
        }
      ],
      highlights: [
        "Real-time post and comment updates via Firebase",
        "Engaging social feed for travelers",
        "Modern Android UI built with XML and Java"
      ]
    },
    technologies: ["XML", "Java", "Firebase"],
    images: ["./img/travelmatepocket.png", "./img/tr4.jpg", "./img/tr2.jpg", "./img/tr3.jpg", "./img/tr1.jpg"],
    link: "/travelmatepocket.html"
  },

  {
    title: "Trackademia",
    description: "A web app for organizing academic materials and tracking learning progress.",
    details: {
      overview: "Trackademia is a personal academic resource manager that allows students and developers to save articles, tutorials, and files in one place, categorize them, and track learning progress visually. I had this project as an academic project for react",
      roles: [
        {
          role: "User",
          desc: "Can save academic links, tag them by topic, and update their status (to read, in progress, completed)."
        }
      ],
      highlights: [
        "Resource tagging and categorization",
        "Progress tracking dashboard",
        "Clean and minimalist React UI"
      ]
    },
    technologies: ["React.js"],
    images: ["./img/trackadamialogo.png","./img/dem5.png","./img/dem4.png","./img/dem1.png","./img/dem2.png","./img/dem3.png"],
    link: "/trackadamia.html"
  },

  {
    title: "Dental Clinic Dashboard",
    description: "A patient and appointment management dashboard for dental clinics.",
    details: {
      overview: "Dental Clinic Dashboard is an admin interface designed for dental clinics to manage appointments, patient records, and treatment plans efficiently. I did this project for my sister's dental clinic",
      roles: [
        {
          role: "Secretary",
          desc: "Can manage patients, schedule appointments, and view statistics in real time."
        },
        {
          role: "Dentist",
          desc: "Accesses patient histories, adds diagnoses, and updates treatment information."
        }
      ],
      highlights: [
        "Appointment scheduling and management",
        "Real-time patient data visualization",
        "User-friendly management dashboard"
      ]
    },
    technologies: ["PHP", "HTML","CSS"],
    images: ["./img/dentist.png","./img/cab1.jpg","./img/cab2.jpg","./img/cab3.jpg"],
    link: "#"
  },

  {
    title: "Pawsome Adoption",
    description: "A mobile application for pet adoption built with Flutter, Cloudinary, and Firebase. I had this project as an academic project",
    details: {
      overview: "Pet Adoption Mobile App is a comprehensive platform that connects pet lovers with animals in need of a home. Users can browse available pets, use advanced filters, send adoption requests, and even list their own animals for adoption. The app manages the entire adoption workflow including request approvals and adoption status tracking.",
      roles: [
        {
          role: "User (Pet Seeker)",
          desc: "Can create an account, login, browse the list of animals available for adoption, use filters to find the perfect pet, and send adoption requests for animals they like."
        },
        {
          role: "User (Pet Owner)",
          desc: "Can add their own animals to the platform, receive adoption requests from interested users, and accept requests to complete the adoption."
        }
      ],
      highlights: [
        "User authentication system with account creation and login",
        "Browse and search animals with advanced filtering options",
        "Send and manage adoption requests",
        "Pet owner dashboard to manage owned animals",
        "Accept adoption requests and update animal status",
        "Adopted animals are automatically hidden from the adoption list",
        "Image management using Cloudinary for optimal storage and delivery",
        "Real-time database with Firebase for instant updates"
      ]
    },
    technologies: ["Flutter", "Dart", "Firebase", "Cloudinary"],
    images: ["./img/pa11.jpg","./img/pa1.jpg", "./img/pa2.jpg", "./img/pa3.jpg", "./img/pa4.jpg", "./img/pa5.jpg"],
    link: "#"
  }
];


// Skills Data
const skills = {
    "💻 Languages": ["HTML", "CSS", "JavaScript", "Dart", "Java", "PHP", "SQL", "Python", "Ruby"],
    "🚀 Frameworks": ["MERN Stack", "Angular", "Spring Boot", "Flutter"],
    "🛠️ Tools": ["VS Code", "IntelliJ", "Postman", "Git"],
    "💾 Databases": ["MongoDB", "Firebase", "MySQL"]
};

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card" data-index="${index}">
            <img src="${project.images[0]}" alt="${project.title}" class="project-image" onerror="this.src='https://via.placeholder.com/400x250/1a0b2e/00fff9?text=${encodeURIComponent(project.title)}'">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <button class="project-link">View Details →</button>
            </div>
        </div>
    `).join('');

    // Attach click listeners to open modal
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const index = e.currentTarget.dataset.index;
            openModal(projects[index]);
        });
    });
}

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = Object.entries(skills).map(([category, items]) => `
        <div class="skill-card">
            <div class="skill-icon">${category.split(' ')[0]}</div>
            <h3 class="skill-title">${category.split(' ').slice(1).join(' ')}</h3>
            <div class="skill-items">
                ${items.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
            </div>
        </div>
    `).join('');
}

// Smooth Scroll Function
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    renderSkills();
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

setTimeout(() => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}, 100);



// ============== MODAL & CAROUSEL LOGIC ==============

// Create modal dynamically
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-btn">&times;</span>
    <div class="modal-carousel">
      <div class="carousel"></div>
      <div class="carousel-controls">
        <button id="prevBtn">&#10094;</button>
        <button id="nextBtn">&#10095;</button>
      </div>
    </div>
    <div class="modal-info">
      <h2 id="modalTitle"></h2>
      <p id="modalDescription"></p>
      <div class="tech-section">
        <h3>Used Technologies</h3>
        <ul id="modalTech"></ul>
      </div>
        <a id="modalLink" href="#" target="_blank" class="btn btn-primary"  style="display:none">Voir le site →</a>
    </div>
  </div>
`;
document.body.appendChild(modal);

const closeBtn = modal.querySelector('.close-btn');
const carouselContainer = modal.querySelector('.carousel');
const prevBtn = modal.querySelector('#prevBtn');
const nextBtn = modal.querySelector('#nextBtn');
let currentImageIndex = 0;

function openModal(project) {
  modal.style.display = 'flex';
  document.getElementById('modalTitle').textContent = project.title;

  const details = project.details;
  let detailsHTML = "";

  if (typeof details === "string") {
    detailsHTML = `<p>${details}</p>`;
  } else {
    detailsHTML += `
      <section class="details-overview">
        <p>${details.overview}</p>
      </section>
      <section class="details-roles">
        <h3> Platform Users</h3>
        <ul>
          ${details.roles.map(r => `
            <li><strong>${r.role}</strong>: ${r.desc}</li>
          `).join('')}
        </ul>
      </section>
      <section class="details-highlights">
        <h3> Key Features</h3>
        <ul>
          ${details.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </section>
    `;
  }

  document.getElementById('modalDescription').innerHTML = detailsHTML;
  document.getElementById('modalTech').innerHTML = project.technologies.map(t => `<li>${t}</li>`).join('');
  document.getElementById('modalLink').href = project.link;

  // Load carousel images
  carouselContainer.innerHTML = project.images.map((img, i) => `
      <img src="${img}" class="carousel-image ${i === 1 ? 'active' : ''}">
  `).join('');
  currentImageIndex = 1;
}


function changeImage(direction) {
    const images = modal.querySelectorAll('.carousel-image');
    if (images.length === 0) return;
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
}

prevBtn.onclick = () => changeImage(-1);
nextBtn.onclick = () => changeImage(1);
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
