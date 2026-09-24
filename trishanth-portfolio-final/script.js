// ================================
// PORTFOLIO JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       MOBILE MENU
       ================================ */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("active");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

        // Close menu when a navigation link is clicked
        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });
    }


    /* ================================
       CURRENT YEAR
       ================================ */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* ================================
       SMOOTH SCROLL
       ================================ */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ================================
       CLOSE MOBILE MENU ON RESIZE
       ================================ */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 700 && nav) {

            nav.classList.remove("active");

            if (menuBtn) {
                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }

    });

});
