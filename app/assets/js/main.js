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
    
    $('.reviews__slider').owlCarousel({
        items: 5,
        loop: false,
        nav: false,
        dots: false,
        margin: 0,
        responsive: {
            320: {
                items: 1.6,
                margin: 20,
                loop: true
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
        }
    });
    $('.timetable__slider').owlCarousel({
        items: 3,
        nav: false,
        dots: false,
        margin: 20,
        responsive: {
            320: {
                items: 1,
                center: true,
                loop: true
            },
            576: {
                items: 1.5,
                loop: true
            },
            768: {
                items: 2,
                loop: true
            },
            992: {
                items: 2,
                loop: true
            },
            1200: {
                items: 3,
            }
        }
    });
});

