// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


// Close menu after clicking a link

const navigationLinks = document.querySelectorAll("#navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});


// ================= EXPLORE NOIR BUTTON =================

const buyButton = document.getElementById("buyButton");

buyButton.addEventListener("click", function () {

    alert("The Noir Collection is coming soon!");

});


// ================= WATCH ANIMATION =================

const products = document.querySelectorAll(".product");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


products.forEach(function (product) {

    observer.observe(product);

});