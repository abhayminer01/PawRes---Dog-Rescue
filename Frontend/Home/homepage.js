 // Login Modal Functionality
        const loginBtn = document.getElementById("loginBtn");
        const loginModal = document.getElementById("loginModal");
        const closeModal = document.getElementById("closeModal");
        const loginContainer = document.getElementById("loginContainer");
        const registerToggle = document.getElementById("registerToggle");
        const loginToggle = document.getElementById("loginToggle");

        // Open modal
        loginBtn.addEventListener("click", () => {
            loginModal.classList.add("active");
            document.body.style.overflow = "hidden";
        });

        // Close modal
        closeModal.addEventListener("click", () => {
            loginModal.classList.remove("active");
            document.body.style.overflow = "auto";
        });

        // Close modal when clicking outside
        loginModal.addEventListener("click", (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        });

        // Toggle between Sign In and Sign Up
        registerToggle.addEventListener("click", () => {
            loginContainer.classList.add("active");
        });

        loginToggle.addEventListener("click", () => {
            loginContainer.classList.remove("active");
        });

        // Theme Toggle Functionality
        const themeToggle = document.getElementById("themeToggle");
        const themeIcon = themeToggle.querySelector("i");

        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            
            document.documentElement.setAttribute("data-theme", newTheme);
            themeIcon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
            
            localStorage.setItem("theme", newTheme);
        }

        // Load saved theme
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        themeIcon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";

        themeToggle.addEventListener("click", toggleTheme);

        // Mobile Menu Toggle
        const mobileMenuToggle = document.getElementById("mobileMenuToggle");
        const navMenu = document.getElementById("navMenu");

        mobileMenuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Stats Animation
        function animateStats() {
            const statNumbers = document.querySelectorAll(".stat-number");
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute("data-target"));
                const increment = target / 50;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current);
                }, 50);
            });
        }

        // Trigger stats animation when stats section comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        });

        const statsSection = document.querySelector(".stats-section");
        if (statsSection) {
            observer.observe(statsSection);
        }

        // Escape key to close modal
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && loginModal.classList.contains("active")) {
                loginModal.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        });