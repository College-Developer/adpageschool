const accordion = document.querySelectorAll(".content-box-ad");

accordion.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active-ad");
    })
})