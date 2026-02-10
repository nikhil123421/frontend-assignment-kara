document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorBox = document.getElementById("error-message");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (!validateEmail(email)) {
                showError("Please enter a valid email address.");
                return;
            }

            if (password.length < 6) {
                showError("Password must be at least 6 characters long.");
                return;
            }
            window.location.href = "dashboard.html";
        });
    }

    function showError(message) {
        errorBox.textContent = message;
        errorBox.classList.remove("d-none"); 
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        if(themeToggleBtn) themeToggleBtn.textContent = "☀️";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
            
            if (body.classList.contains("dark-mode")) {
                themeToggleBtn.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                themeToggleBtn.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    }
}); 