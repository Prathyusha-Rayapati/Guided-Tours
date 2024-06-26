if (window.screen.width <= 1130) {
    function removeall() {
        $(".cir_border").css("border", "none");
    }
    $("#sec").on("click", function () {
        removeall();
        $("#sec").css("border", "2px solid whitesmoke");
        $("#sec").css("border-radius", "20px");
    });
    $("#pri").on("click", function () {
        removeall();
        $("#pri").css("border", "2px solid whitesmoke");
        $("#pri").css("border-radius", "20px");
    });
    $("#tri").on("click", function () {
        removeall();
        $("#tri").css("border", "2px solid whitesmoke");
        $("#tri").css("border-radius", "20px");
    });
    $("#quad").on("click", function () {
        removeall();
        $("#quad").css("border", "2px solid whitesmoke");
        $("#quad").css("border-radius", "20px");
    });
    $("#quint").on("click", function () {
        removeall();
        $("#quint").css("border", "2px solid whitesmoke");
        $("#quint").css("border-radius", "20px");
    });
    $("#hex").on("click", function () {
        removeall();
        $("#hex").css("border", "2px solid whitesmoke");
        $("#hex").css("border-radius", "20px");
    });
    $("#hept").on("click", function () {
        removeall();
        $("#hept").css("border", "2px solid whitesmoke");
        $("#hept").css("border-radius", "20px");
    });
}

$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

$("input").on("change", function () {
    $("body").toggleClass("blue");
});

// Light/Dark toggle
const checkbox = document.getElementById("checkbox");

function introAboutLogoTransition() {
    $("#about-quad").css("top", "70%");
    $("#about-quad").css("opacity", "1");
}

function checkDarkMode() {
    if (
        localStorage.getItem("tourism_website_darkmode") !== null &&
        localStorage.getItem("tourism_website_darkmode") === "true"
    ) {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }
}
checkDarkMode();

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.body.classList.contains("dark")
        ? localStorage.setItem("tourism_website_darkmode", true)
        : localStorage.setItem("tourism_website_darkmode", false);
});

// scroll button

let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Update Navbar While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (window.screen.width <= 425) {
            if (rect.top <= 1300) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else if (425 <= window.screen.width <= 768) {
            if (rect.top <= 1250) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else {
            if (rect.top <= 1000) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('7FXhvCZdGk8uvMCuO'); // Initialize EmailJS with your USER_ID obtained from EmailJS dashboard
  
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Collect form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phoneno: document.getElementById('phoneno').value,
        country: document.getElementById('location').value,
        days: document.getElementById('days').value,
        date: document.getElementById('date').value
      };
  
      // Send email using EmailJS
      emailjs.send('service_r4zaixq', 'template_rk598h7', formData)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully.');
          contactForm.reset(); // Reset form after successful submission
        }, function(error) {
          console.error('FAILED...', error);
          alert('Oops! An error occurred, please try again later.');
        });
    });
  });
$(document).ready(function() {
    // Function to handle collapse for smaller screens
    function handleCollapse() {
        if (window.screen.width <= 1130) {
            $(".nav-links").removeClass("open"); // Ensure menu is closed initially
            $(".menu-btn").on("click", function() {
                $(".nav-links").toggleClass("open"); // Toggle menu visibility on button click
            });
             $(document).on("click", ".nav-links li a", function() {
                $(".nav-links").removeClass("open");
            });
        }
    }

    // Call handleCollapse initially and on window resize
    handleCollapse();
    $(window).resize(handleCollapse);
});

window.addEventListener("scroll", updateNav);
