// Run on DOM ready // short
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for nav links // short
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // stop default // short
        const targetEl = document.querySelector(this.getAttribute('href'));
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    
    // Handle contact form submission // short
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent reload // short
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) { // simple validation // short
          alert('Thanks, ' + name + '! Your message is received.');
          contactForm.reset(); // clear fields // short
        } else {
          alert('Please fill all required fields.');
        }
      });
    }
  });
  