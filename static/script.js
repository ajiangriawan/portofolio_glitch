document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.querySelector(".navbar-container");
    const hamburgerMenu = document.querySelector(".hamburger");
  
    hamburgerMenu.addEventListener("click", function () {
        navbarContainer.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-list a');
  
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        const navbarHeight = document.querySelector('.navbar-container').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
  
        links.forEach(otherLink => otherLink.classList.remove('active'));
        link.classList.add('active');
      });
    });
  });
  