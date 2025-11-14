let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

//initialising js code for modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

//config param
let countItem = items.length;
let itemActive = 0;
//Event next click
next.onclick = function() {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
};

//Event prev click
prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
};

//Auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 10000);

function showSlider() {
    //remove item active old
    let itemActiveOld = document.querySelector(".slider .list .item.active");
    let thumbnailActiveold = document.querySelector(".thumbnail .item.active");
    itemActiveOld.classList.remove("active");
    thumbnailActiveold.classList.remove("active");

    //Active new item
    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");
}

//Clear auto time run
clearInterval(refreshInterval);
refreshInterval = setInterval(() => {
    next.click();
}, 10000);
//click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        itemActive = index;
        showSlider();
    });
});

//Modal window code
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e) {
    console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        console.log("Esc was pressed");
        closeModal();
    }
});