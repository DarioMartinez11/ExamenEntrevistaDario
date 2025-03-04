// Menú hamburguesa para mobile
function toggleMenu() {
    let sidebar = document.querySelector(".sidebar-mobile");
    sidebar.classList.toggle("active");
}

// Cierra el menú si se hace clic fuera
document.addEventListener("click", function (event) {
    let sidebar = document.querySelector(".sidebar-mobile");
    let menuButton = document.querySelector(".menu-icon");

    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

// Filtrar Posts
function filterPosts(category) {
    let posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        if (category === "all") {
            post.style.display = "block";
        } else {
            let categories = post.getAttribute("data-category").split(" ");
            post.style.display = categories.includes(category) ? "block" : "none";
        }
    });
}
