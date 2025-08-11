const projects = [
  {
    title: "Sutori Course Design",
    image: "../images/Sutori.jpg",
    url: "./sutori/"
  },
  {
    title: "Canvas LMS Course",
    image: "../images/Course.jpg",
    url: "./canvas/"
  },
  {
    title: "Pear Deck: Culturally Sustaining Technology",
    image: "../images/STEMed.png",
    url: "./peardeck/"
  },
  {
    title: "Universal Design for Learning Tools",
    image: "../images/Padlet.jpg",
    url: "./universaldesign/"
  },
  {
    title: "My Education Technologist Work",
    image: "../images/PPTExample.png",
    url: "./edtech/"
  },
  {
    title: "Simple Education Applications",
    image: "../images/App1.jpg",
    url: "./edactivities/"
  },
  {
    title: "Florida Collegiate Gaming Convention",
    image: "images/2020Flyer.jpg",
    url: "../floridagamecon/"
  },
  {
    title: "The Video Game Club at USF",
    image: "../images/Club1.jpg",
    url: "../videogameclub/"
  },
  {
    title: "Geeky Gators: Wellness Workshops",
    image: "../images/Minecraft.png",
    url: "./geekygators/"
  },
  {
    title: "Graphic Design: Marketing Materials",
    image: "../images/GamesFromGraveyard.jpg",
    url: "./marketing/"
  },
  {
    title: "Web Design: Website Collection",
    image: "../images/ConWebsite.jpg",
    url: "./webdesign/"
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
