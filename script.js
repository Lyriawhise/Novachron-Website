        //  scroll animations
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.2
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  if (entry.target.classList.contains('feature')) {
                      entry.target.style.transitionDelay = `${Math.random() * 0.3}s`;
                  }
              }
          });
      }, observerOptions);

      document.querySelectorAll('.fade-up').forEach(element => {
          observer.observe(element);
      });

      //  navbar scroll effect
      let lastScroll = 0;
      window.addEventListener('scroll', () => {
          const navbar = document.getElementById('navbar');
          const currentScroll = window.pageYOffset;

          if (currentScroll > lastScroll && currentScroll > 100) {
              navbar.style.transform = 'translateY(-100%)';
          } else {
              navbar.style.transform = 'translateY(0)';
              if (currentScroll > 50) {
                  navbar.classList.add('nav-scrolled');
              } else {
                  navbar.classList.remove('nav-scrolled');
              }
          }
          lastScroll = currentScroll;
      });

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });

      // Form submission handler
      document.getElementById('contactForm').addEventListener('submit', function(e) {
          e.preventDefault();
          // Add your form submission logic here
          alert('Thank you for your message. We will contact you shortly.');
          this.reset();
      });

      // Dynamic copyright year
      document.querySelector('.footer-bottom p').innerHTML = 
          `&copy; ${new Date().getFullYear()} CHRONOS. All rights reserved.`;

