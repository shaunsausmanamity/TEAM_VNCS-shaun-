// script.js for SOUTHSIDE Men's Section - No CSS changes required

document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile menu functionality (works with existing responsive CSS)
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none'; // Hidden by default
    mobileMenuBtn.style.background = 'none';
    mobileMenuBtn.style.border = 'none';
    mobileMenuBtn.style.fontSize = '24px';
    mobileMenuBtn.style.cursor = 'pointer';
    mobileMenuBtn.style.color = 'white';
    mobileMenuBtn.style.padding = '10px';
    document.querySelector('.header-container').prepend(mobileMenuBtn);
    
    // Show mobile button only on mobile sizes
    function checkMobile() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            document.querySelector('.nav').style.display = 'none';
        } else {
            mobileMenuBtn.style.display = 'none';
            document.querySelector('.nav').style.display = '';
        }
    }
    
    // Initial check
    checkMobile();
    
    // Handle window resize
    window.addEventListener('resize', checkMobile);
    
    // Toggle menu
    mobileMenuBtn.addEventListener('click', function() {
        const nav = document.querySelector('.nav');
        nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
    });

    // 2. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Newsletter form handling with inline styles
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                // Create success message with inline styles
                const successMsg = document.createElement('p');
                successMsg.textContent = 'Thank you for subscribing!';
                successMsg.style.color = 'white';
                successMsg.style.fontSize = '1.2em';
                successMsg.style.marginBottom = '15px';
                
                this.parentNode.insertBefore(successMsg, this);
                this.style.display = 'none';
                
                setTimeout(() => {
                    this.style.display = '';
                    successMsg.remove();
                    this.reset();
                }, 3000);
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
/ 4. Product card hover effects with inline styles
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
        });
    });

    // 5. Active navigation highlighting
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav a').forEach(link => {
                    link.style.borderBottom = 'none';
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.borderBottom = '2px solid white';
                    }
                });
            }
        });
    });

