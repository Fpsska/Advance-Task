document.addEventListener("DOMContentLoaded", () => {
    const reviewBtn = document.querySelectorAll(".reviews__button")
    reviewBtn.forEach(item => {
        item.addEventListener("click", () => {
            reviewBtn.forEach(item => {
                item.classList.remove("active")
            })
            item.classList.add("active")
        })
    })
    const reviewCard = document.querySelectorAll(".reviews__card");
    const reviewName = document.querySelectorAll(".reviews__name");
    const reviewImage = document.querySelectorAll(".reviews__image");

});

