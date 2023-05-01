document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
  
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("nav-menu-open");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // ...
    
    const toggleProjectsButton = document.getElementById("toggle-projects");
    const projectsSection = document.getElementById("projects");
    const recentProjectsHeading = document.getElementById("recent-projects-heading");
  
    toggleProjectsButton.addEventListener("click", function () {
      projectsSection.classList.toggle("hidden");
      recentProjectsHeading.classList.toggle("hidden");
  
      if (projectsSection.classList.contains("hidden")) {
        toggleProjectsButton.textContent = "Show Projects";
      } else {
        toggleProjectsButton.textContent = "Hide Projects";
      }
    });
  });


  
  
  
  
