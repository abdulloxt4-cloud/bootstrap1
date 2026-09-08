const stars = document.querySelectorAll(".star");

stars.forEach(function (star) {

    star.addEventListener("click", function () {

        star.classList.toggle("bi-star");
        star.classList.toggle("bi-star-fill");

    });

});


const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cards = document.querySelectorAll(".project");


searchBtn.addEventListener("click", function () {

    const search = searchInput.value.toLowerCase();

    cards.forEach(function (card) {

        const text = card.innerText.toLowerCase();

        if (text.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


const filterButtons = document.querySelectorAll(".filter-x");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.parentElement.remove();

    });

});