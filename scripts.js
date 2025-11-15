// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initTheme();
  initNavigation();
  initTypingEffect();
  initProjectFilter();
  initCommandPalette();
  initContactForm();
  initScrollAnimations();
  initMobileMenu();
});

// Theme functionality
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const themeIcon = themeToggle.querySelector("svg");

  // Check for saved theme or prefer-color-scheme
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
    body.classList.replace("dark", "light");
    updateThemeIcon(false);
  }

  themeToggle.addEventListener("click", () => {
    const isDark = body.classList.contains("dark");
    if (isDark) {
      body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
      updateThemeIcon(false);
    } else {
      body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
      updateThemeIcon(true);
    }
  });

  function updateThemeIcon(isDark) {
    const paths = [
      "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z",
      "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
    ];
    themeIcon.innerHTML = `<path d="${paths[isDark ? 0 : 1]}"/>`;
  }
}

// Navigation functionality
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Update active states
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        // Scroll to section
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });

  // Update active link on scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section, #home");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
}

// Typing effect
function initTypingEffect() {
  const typingText = document.getElementById("typing-text");
  const texts = [
    "Learning to Build Scalable Digital Products with AI",
    "Exploring AI Integration in Web Applications",
    "Developing Skills in Full-Stack Development & AI",
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      typingDelay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingDelay = 500;
    }

    setTimeout(type, typingDelay);
  }

  // Start typing effect
  setTimeout(type, 1000);
}

// Project filtering
function initProjectFilter() {
  const filters = document.querySelectorAll(".project-filter");
  const projects = document.querySelectorAll(".project-item");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Update active filter
      filters.forEach((f) => f.classList.remove("active"));
      filter.classList.add("active");

      const filterValue = filter.getAttribute("data-filter");

      // Filter projects
      projects.forEach((project) => {
        if (
          filterValue === "all" ||
          project.getAttribute("data-category").includes(filterValue)
        ) {
          project.style.display = "block";
          setTimeout(() => {
            project.style.opacity = "1";
            project.style.transform = "translateY(0)";
          }, 100);
        } else {
          project.style.opacity = "0";
          project.style.transform = "translateY(20px)";
          setTimeout(() => {
            project.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Command palette
function initCommandPalette() {
  const overlay = document.getElementById("overlay");
  const commandPalette = document.getElementById("command-palette");
  const commandInput = document.getElementById("command-input");
  const commandOptions = document.querySelectorAll(".command-option");

  // Open command palette with Ctrl+K
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openCommandPalette();
    }
    if (e.key === "Escape") {
      closeCommandPalette();
    }
  });

  // Close when clicking overlay
  overlay.addEventListener("click", closeCommandPalette);

  // Handle command selection
  commandOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const action = option.getAttribute("data-action");
      executeCommand(action);
    });
  });

  // Filter commands while typing
  commandInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    commandOptions.forEach((option) => {
      const text = option.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  });

  function openCommandPalette() {
    overlay.classList.add("show");
    commandPalette.classList.add("show");
    commandInput.focus();
    commandInput.value = "";
    commandOptions.forEach((option) => (option.style.display = "block"));
  }

  function closeCommandPalette() {
    overlay.classList.remove("show");
    commandPalette.classList.remove("show");
  }

  function executeCommand(action) {
    closeCommandPalette();
    switch (action) {
      case "about":
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "resume":
        document.getElementById("download-resume").click();
        break;
      case "contact":
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
        break;
    }
  }
}

// Contact form
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    contactForm.classList.add("loading");

    // Simulate form submission
    try {
      // In a real application, you would send data to your backend here
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
      contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    } catch (error) {
      // Show error message
      errorMessage.style.display = "block";
      successMessage.style.display = "none";
    } finally {
      // Reset button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      contactForm.classList.remove("loading");
    }
  });
}

// Scroll animations
function initScrollAnimations() {
  // Only initialize if GSAP is available and user doesn't prefer reduced motion
  if (
    typeof gsap !== "undefined" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate skill bars
    gsap.utils.toArray(".skill-bar").forEach((bar) => {
      const width = bar.style.getPropertyValue("--width") || "0%";
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: width,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar.parentElement.parentElement,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }
}

// Mobile menu
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuToggle.addEventListener("click", openMobileMenu);
  mobileMenuClose.addEventListener("click", closeMobileMenu);

  // Close menu when clicking on a link
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  function openMobileMenu() {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Download resume
document.getElementById("download-resume").addEventListener("click", (e) => {
  e.preventDefault();
  // In a real application, this would trigger a file download
  alert(
    "Resume download would start here. In a real application, this would be a PDF file."
  );
});
