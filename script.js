document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Navigation Toggle & Hamburger Menu Animation
    const menuIcon = document.getElementById("menu-icon");
    const nav = document.querySelector("header nav");
    const navLinks = document.querySelectorAll("header nav a");

    if (menuIcon && nav) {
        menuIcon.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuIcon.classList.toggle("fa-bars");
            menuIcon.classList.toggle("fa-xmark");
        });

        // Close mobile menu when a navigation link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menuIcon.classList.add("fa-bars");
                menuIcon.classList.remove("fa-xmark");
            });
        });
    }

    // 2. Sticky Navbar & Dynamic Floating Back-to-Top Button
    const header = document.querySelector("header");

    // Dynamic Injection of Scroll-to-Top Widget
    const scrollTopBtn = document.createElement("div");
    scrollTopBtn.id = "scroll-top-btn";
    scrollTopBtn.setAttribute("aria-label", "Scroll to top");
    scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        // Sticky Header Toggle
        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        // Show/Hide Floating Back-to-Top Button
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    // 3. Modern Section Highlighting in Navbar on Scroll (IntersectionObserver)
    const sections = document.querySelectorAll("section");
    
    const navObserverOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Focus triggers when section is in active viewing area
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute("id");
                
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${activeId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // 4. Custom Letter-by-Letter JS Typing Animation Engine
    const typedSpan = document.getElementById("typed-span");
    const roles = [
        "Web Developer",
        "Frontend Engineer",
        "UI/UX Designer",
        "Creative Technologist",
        "Problem Solver"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typedSpan) return;

        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80; // Delete faster than typing

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 1800; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400; // Pause before typing next word
        }

        setTimeout(typeEffect, speed);
    }

    // Initialize typing effect
    if (typedSpan) {
        setTimeout(typeEffect, 800);
    }

    // 5. Dynamic Skills Progress Bars Animation (Trigger on scroll)
    const skillsSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".progress-bar");

    const skillsObserverOptions = {
        root: null,
        threshold: 0.15
    };

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const widthPercent = bar.getAttribute("data-width");
                    bar.style.width = widthPercent;
                });
                // Unobserve after running once to retain performance
                skillsObserver.unobserve(entry.target);
            }
        });
    }, skillsObserverOptions);

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // 6. Scroll Reveal Engine (Animate items when entering view)
    const animators = document.querySelectorAll(
        ".heading, .services-box, .skills-box, .timeline-content, .portfolio-box, .contact form"
    );

    // Apply reveal base class programmatically so JS-disabled devices still see content
    animators.forEach(element => {
        element.classList.add("reveal");
    });

    const revealObserverOptions = {
        root: null,
        rootMargin: "0px 0px -80px 0px", // Trigger slightly before scrolling onto item
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Option to unobserve so reveal happens once
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    animators.forEach(element => {
        revealObserver.observe(element);
    });

    // 7. Premium Toast System & Client Form Validation
    const contactForm = document.getElementById("contact-form");

    // EmailJS Configuration Keys
    const PUBLIC_KEY = "NoIo1vziuhGxCoUQc";
    const SERVICE_ID = "service_2rejuyn";
    const TEMPLATE_ID = "template_zmuhv1k";

    // Initialize EmailJS immediately on page load
    if (contactForm && PUBLIC_KEY && PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        try {
            emailjs.init(PUBLIC_KEY);
        } catch (initErr) {
            console.error("[EmailJS Initialization Error]", initErr);
        }
    }

    function displayToast(message, iconClass = "fa-solid fa-circle-check") {
        let toastContainer = document.querySelector(".toast-container");
        if (!toastContainer) {
            toastContainer = document.createElement("div");
            toastContainer.className = "toast-container";
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `<i class="${iconClass}"></i><span>${message}</span>`;
        
        toastContainer.appendChild(toast);

        // Slide away and destroy
        setTimeout(() => {
            toast.classList.add("fade-out");
            toast.addEventListener("transitionend", () => {
                toast.remove();
                if (toastContainer.children.length === 0) {
                    toastContainer.remove();
                }
            });
        }, 4000);
    }

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Fetch input fields
            const nameField = document.getElementById("user-name");
            const emailField = document.getElementById("user-email");
            const phoneField = document.getElementById("user-phone");
            const subjectField = document.getElementById("email-subject");
            const messageField = document.getElementById("user-message");
            const submitBtn = contactForm.querySelector("button[type='submit']");

            // Client-side validations
            if (!nameField.value.trim() || !emailField.value.trim() || !subjectField.value.trim() || !messageField.value.trim()) {
                displayToast("Please fill in all required fields.", "fa-solid fa-circle-exclamation");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value.trim())) {
                displayToast("Please enter a valid email address.", "fa-solid fa-circle-exclamation");
                return;
            }

            const originalBtnText = submitBtn.innerHTML;

            try {
                // Set loading spinner and disable state
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" style="margin-right: 8px;"></i>Sending...';

                // Check if keys are set
                if (PUBLIC_KEY !== "YOUR_PUBLIC_KEY" && SERVICE_ID !== "YOUR_SERVICE_ID" && TEMPLATE_ID !== "YOUR_TEMPLATE_ID") {
                    // Map parameters to matches in your EmailJS template
                    const templateParams = {
                        from_name: nameField.value.trim(),
                        from_email: emailField.value.trim(),
                        phone: phoneField ? phoneField.value.trim() : "Not provided",
                        subject: subjectField.value.trim(),
                        message: messageField.value.trim()
                    };

                    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

                    if (response.status === 200) {
                        displayToast(`Thank you, ${nameField.value.trim().split(" ")[0]}! Your message has been sent successfully.`);
                        contactForm.reset();
                    } else {
                        throw new Error(`EmailJS Error Status: ${response.status}`);
                    }
                } else {
                    // SIMULATED PRODUCTION MODE: Logs and mocks email delivery
                    console.log("==========================================");
                    console.log("[EmailJS] SIMULATED MODE: Form Submitted!");
                    console.log(`From:    ${nameField.value.trim()} <${emailField.value.trim()}>`);
                    console.log(`Phone:   ${phoneField ? phoneField.value.trim() : "Not provided"}`);
                    console.log(`Subject: ${subjectField.value.trim()}`);
                    console.log(`Message: ${messageField.value.trim()}`);
                    console.log("[EmailJS] Note: Replace the PUBLIC_KEY, SERVICE_ID, and TEMPLATE_ID placeholders in script.js with your real credentials to enable live sending.");
                    console.log("==========================================");

                    // Mock delay for premium visual loading feel
                    await new Promise(resolve => setTimeout(resolve, 1500));

                    displayToast(`Thank you, ${nameField.value.trim().split(" ")[0]}! Your message was received in Simulated EmailJS Mode.`);
                    contactForm.reset();
                }
            } catch (error) {
                console.error("[EmailJS Error]", error);
                displayToast("Failed to send message. Please verify your EmailJS keys.", "fa-solid fa-circle-exclamation");
            } finally {
                // Restore button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }

    // 8. Custom Animated Cursor
    const cursor = document.querySelector(".cursor");
    const cursorFollower = document.querySelector(".cursor-follower");
    
    if (cursor && cursorFollower) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
            
            // Follower uses slight delay from CSS transition, but we set position here
            cursorFollower.style.left = e.clientX + "px";
            cursorFollower.style.top = e.clientY + "px";
        });

        // Add hover effect for links and buttons
        const hoverElements = document.querySelectorAll("a, .btn, .services-box, .skills-box, .timeline-content, .portfolio-box, input, textarea, button");
        hoverElements.forEach(el => {
            el.addEventListener("mouseenter", () => cursorFollower.classList.add("hover"));
            el.addEventListener("mouseleave", () => cursorFollower.classList.remove("hover"));
        });
    }

    // 9. 3D Tilt Effect for Cards
    const tiltElements = document.querySelectorAll(".services-box, .skills-box, .timeline-content, .portfolio-box");
    tiltElements.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
            const rotateY = ((x - centerX) / centerX) * 10;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        el.addEventListener("mouseleave", () => {
            el.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            el.style.transition = "transform 0.5s ease"; // Smooth reset
        });
        
        el.addEventListener("mouseenter", () => {
            el.style.transition = "none"; // Remove transition for instant tracking
        });
    });

    // 10. Magnetic Button Effect
    const magneticElements = document.querySelectorAll(".btn, .social-icons a");
    magneticElements.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        el.addEventListener("mouseleave", () => {
            el.style.transform = "translate(0px, 0px)";
        });
    });

    // 11. Services Read More Expandable Panel Accordion
    const readMoreBtns = document.querySelectorAll(".read-more-btn");
    readMoreBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const serviceBox = btn.closest(".services-box");
            if (serviceBox) {
                serviceBox.classList.toggle("expanded");
                if (serviceBox.classList.contains("expanded")) {
                    btn.textContent = "Read Less";
                } else {
                    btn.textContent = "Read More";
                }
            }
        });
    });

});
