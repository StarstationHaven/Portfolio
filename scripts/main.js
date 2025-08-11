const projects = [
  {
    title: "Sutori Course Design",
    image: "../../images/Sutori.jpg",
    url: "../sutori/"
  },
  {
    title: "Canvas LMS Course",
    image: "../../images/Course.jpg",
    url: "../canvas/"
  },
  {
    title: "Pear Deck: Culturally Sustaining Technology",
    image: "../../images/STEMed.png",
    url: "../peardeck/"
  },
  {
    title: "Universal Design for Learning Tools",
    image: "../../images/Padlet.jpg",
    url: "../universaldesign/"
  },
  {
    title: "My Education Technologist Work",
    image: "../../images/PPTExample.png",
    url: "../edtech/"
  },
  {
    title: "Simple Education Applications",
    image: "../../images/App1.jpg",
    url: "../edactivities/"
  },
  {
    title: "Florida Collegiate Gaming Convention",
    image: "../../images/2020Flyer.jpg",
    url: "../floridagamecon/"
  },
  {
    title: "The Video Game Club at USF",
    image: "../../images/Club1.jpg",
    url: "../videogameclub/"
  },
  {
    title: "Geeky Gators: Wellness Workshops",
    image: "../../images/Minecraft.png",
    url: "../geekygators/"
  },
  {
    title: "Graphic Design: Marketing Materials",
    image: "../../images/GamesFromGraveyard.jpg",
    url: "../marketing/"
  },
  {
    title: "Web Design: Website Collection",
    image: "../../images/ConWebsite.jpg",
    url: "../webdesign/"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  // --- DEBUGGING INFO ---
  console.log("=== DEBUGGING PROJECT NAVIGATION ===");
  console.log("Full URL:", window.location.href);
  console.log("Pathname:", window.location.pathname);
  console.log("Path parts:", window.location.pathname.split("/"));
  
  // --- Mobile Nav Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // --- Dynamic Project Navigation ---
  const pathParts = window.location.pathname.split("/");
  console.log("Path parts array:", pathParts);
  
  // Try multiple methods to get the current project
  const method1 = pathParts[pathParts.length - 2]; // Second to last part
  const method2 = pathParts[pathParts.length - 1]; // Last part
  const method3 = pathParts.find(part => part && part !== 'projects'); // First non-empty, non-projects part
  
  console.log("Method 1 (second to last):", method1);
  console.log("Method 2 (last part):", method2);
  console.log("Method 3 (find non-projects):", method3);
  
  // Try to find current project with each method
  let currentIndex = -1;
  let currentProjectFolder = '';
  
  // Try method 1
  if (method1) {
    currentIndex = projects.findIndex(p => {
      const projectFolder = p.url.replace("../", "").replace("/", "");
      return projectFolder === method1;
    });
    if (currentIndex !== -1) {
      currentProjectFolder = method1;
      console.log("Found project using method 1:", currentProjectFolder);
    }
  }
  
  // Try method 2 if method 1 failed
  if (currentIndex === -1 && method2 && method2 !== '') {
    currentIndex = projects.findIndex(p => {
      const projectFolder = p.url.replace("../", "").replace("/", "");
      return projectFolder === method2;
    });
    if (currentIndex !== -1) {
      currentProjectFolder = method2;
      console.log("Found project using method 2:", currentProjectFolder);
    }
  }
  
  // Try method 3 if others failed
  if (currentIndex === -1 && method3) {
    currentIndex = projects.findIndex(p => {
      const projectFolder = p.url.replace("../", "").replace("/", "");
      return projectFolder === method3;
    });
    if (currentIndex !== -1) {
      currentProjectFolder = method3;
      console.log("Found project using method 3:", currentProjectFolder);
    }
  }

  console.log("Final currentIndex:", currentIndex);
  console.log("Final currentProjectFolder:", currentProjectFolder);
  
  // Show all available project folders for comparison
  const availableProjects = projects.map(p => p.url.replace("../", "").replace("/", ""));
  console.log("Available project folders:", availableProjects);

  if (currentIndex === -1) {
    console.error("❌ Current project not found!");
    console.log("Check that your folder name matches one of:", availableProjects);
    return;
  }

  console.log("✅ Current project found:", projects[currentIndex].title);

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  console.log("Previous project:", projects[prevIndex].title);
  console.log("Next project:", projects[nextIndex].title);

  const prevLink = document.getElementById("prevProjectLink");
  const nextLink = document.getElementById("nextProjectLink");

  console.log("prevLink element:", prevLink);
  console.log("nextLink element:", nextLink);

  if (prevLink && nextLink) {
    // Fill Previous Project
    const prevThumbnail = prevLink.querySelector(".nav-thumbnail");
    const prevTitle = prevLink.querySelector(".nav-title");
    
    console.log("Previous thumbnail element:", prevThumbnail);
    console.log("Previous title element:", prevTitle);
    
    if (prevThumbnail && prevTitle) {
      prevLink.href = projects[prevIndex].url;
      prevThumbnail.src = projects[prevIndex].image;
      prevThumbnail.alt = projects[prevIndex].title;
      prevTitle.textContent = projects[prevIndex].title;
      console.log("✅ Previous project navigation set up");
    } else {
      console.error("❌ Previous project thumbnail or title element not found");
    }

    // Fill Next Project
    const nextThumbnail = nextLink.querySelector(".nav-thumbnail");
    const nextTitle = nextLink.querySelector(".nav-title");
    
    console.log("Next thumbnail element:", nextThumbnail);
    console.log("Next title element:", nextTitle);
    
    if (nextThumbnail && nextTitle) {
      nextLink.href = projects[nextIndex].url;
      nextThumbnail.src = projects[nextIndex].image;
      nextThumbnail.alt = projects[nextIndex].title;
      nextTitle.textContent = projects[nextIndex].title;
      console.log("✅ Next project navigation set up");
    } else {
      console.error("❌ Next project thumbnail or title element not found");
    }
  } else {
    console.error("❌ Previous/Next navigation links not found in DOM");
    console.log("Make sure you have elements with IDs 'prevProjectLink' and 'nextProjectLink'");
  }
  
  console.log("=== END DEBUGGING ===");
});