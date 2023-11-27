function markActive(index) {
  // Remove 'active' class from all links
  let links = document.querySelectorAll(".nav-items a");
  links.forEach((link) => link.classList.remove("active"));

  // Add 'active' class to the clicked link
  links[index].classList.add("active");
}


// Menu


$('#menu').click(function () {
  $(this).toggleClass('fa-times');
  $('.navbar').toggleClass('nav-toggle');
});


// Scroll Reveal


$(window).on('scroll load', function () {
  $('#menu').removeClass('fa-times');
  $('.navbar').removeClass('nav-toggle');

  if (window.scrollY > 60) {
      document.querySelector('#scroll-top').classList.add('active');
  } else {
      document.querySelector('#scroll-top').classList.remove('active');
  }     // scroll spy
  $('section').each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr('id');

      if (top > offset && top < offset + height) {
          $('.navbar ul li a').removeClass('active');
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }
  });
});


const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});


// <!-- typed js effect starts -->

var typed = new Typed(".typing-text", {
  strings: ["Frontend development", "Backend development" ,"Web development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});


// Mail

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  
  // Create mailto link with form data
  const mailtoLink = `mailto:${email}?subject=New Form Submission&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
  
  // Open user's default email client
  window.location.href = mailtoLink;
});


