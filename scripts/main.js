const projects = [
  {
    title: "Florida Collegiate Gaming Convention",
    image: "images/2020Flyer.jpg",
    url: "Florida-Game-Con.html"
  },
  {
    title: "eSports Curriculum Launch",
    image: "images/EsportsCurriculum.jpg",
    url: "about.html"
  },
  {
    title: "Instructional Design for Accessibility",
    image: "images/Accessibility.jpg",
    url: "index.html"
  },
  {
    title: "Interactive Sutori Timeline",
    image: "images/Sutori.jpg",
    url: "Sutori.html"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  // --- Mobile Nav Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // --- Dynamic Project Navigation ---
  const currentURL = window.location.pathname.split("/").pop();
  const currentIndex = projects.findIndex(p => p.url === currentURL);

  if (currentIndex === -1) {
    console.warn("Current project not found in project list:", currentURL);
    return;
  }

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const prevLink = document.getElementById("prevProjectLink");
  const nextLink = document.getElementById("nextProjectLink");

  if (prevLink && nextLink) {
    // Fill Previous Project
    prevLink.href = projects[prevIndex].url;
    prevLink.querySelector(".nav-thumbnail").src = projects[prevIndex].image;
    prevLink.querySelector(".nav-thumbnail").alt = projects[prevIndex].title;
    prevLink.querySelector(".nav-title").textContent = projects[prevIndex].title;

    // Fill Next Project
    nextLink.href = projects[nextIndex].url;
    nextLink.querySelector(".nav-thumbnail").src = projects[nextIndex].image;
    nextLink.querySelector(".nav-thumbnail").alt = projects[nextIndex].title;
    nextLink.querySelector(".nav-title").textContent = projects[nextIndex].title;
  } else {
    console.warn("Previous/Next navigation links not found in DOM.");
  }
});
