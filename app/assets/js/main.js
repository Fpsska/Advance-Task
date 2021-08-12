document.addEventListener("DOMContentLoaded", () => {
    let reviewBtns = document.querySelectorAll(".reviews__button");
    reviewBtns.forEach(item => {
        item.addEventListener("click", () => {
            reviewBtns.forEach(item => {
                item.classList.remove("active")
            })
            item.classList.add("active")
        })
    })

    let reviewCards = document.querySelectorAll("reviews__card");

    reviewCards.forEach(item => {
        item.addEventListener("click", () => {
            reviewCards.forEach(item => {
                item.classList.remove("active")
            })
            item.classList.add("active")
        })
    })

    // /. review tabs

    $('.timetable__slider').owlCarousel({
        items: 3,
        nav: false,
        margin: 20,
        responsive: {
            320: {
                items: 1,
                loop: true,
                center: true,
            },
            480: {
                items: 1,
                center: true,
                loop: true,
                margin: 0
            },
            576: {
                items: 1.2,
                loop: true
            },
            768: {
                items: 2,
                margin: 20,
                dots: true,
                loop: true
            },
            992: {
                items: 2.3,
                dots: true,
                loop: true
            },
            1024: {
                items: 2,
                margin: 0,
                loop: true,
                dots: true
            },
            1366: {
                items: 3,
                margin: 20,
                loop: false,
                dots: true
            },
            1920: {
                items: 3,
                margin: 0,
            }
        }
    });

    $('.reviews__slider').owlCarousel({
        items: 5,
        loop: false,
        nav: false,
        dots: false,
        margin: 0,
        responsive: {
            320: {
                items: 1.3,
                margin: 0,
                loop: true,
            },
            480: {
                items: 1.6,
                margin: 20,
                loop: true,
            },
            576: {
                items: 2.5,
                margin: 60,
                loop: true
            },
            867: {
                items: 3,
                margin: 20,
                loop: true
            },
            992: {
                items: 4.3,
                margin: 15,
                loop: true
            },
            1200: {
                items: 5,
            },
            1600: {
                items: 5,
            },
            1920: {
                items: 5,
            }
        },
    });
    // /. sliders


    let btnComment = document.querySelector(".reviews__button_comment");
    let commentText = document.querySelector(".reviews__comment");

    btnComment.addEventListener("click", () => {
        if (commentText.style.WebkitLineClamp < 100) {
            commentText.style.WebkitLineClamp = 100
        } else {
            commentText.style.WebkitLineClamp = 7
        }
    })

    // /. show comment
});

