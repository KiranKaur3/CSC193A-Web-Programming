function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");  

    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");  
}

document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
