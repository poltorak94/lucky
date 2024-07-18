document.addEventListener("DOMContentLoaded", () => {
    //tabs

    const nav = document.querySelectorAll(".production__nav-item");
    const tabs = document.querySelectorAll(".production__tab");

    nav.forEach((el) =>
        el.addEventListener("click", function (e) {
            e.preventDefault();

            nav.forEach((item) =>
                item.classList.remove("production__nav-item--active")
            );

            let navId = el.getAttribute("data-id");
            this.classList.add("production__nav-item--active");

            tabs.forEach(function (item) {
                item.classList.remove("production__tab--active");
                let tabId = item.getAttribute("data-id");

                if (tabId == navId) {
                    item.classList.add("production__tab--active");
                }
            });
        })
    );

    //sliders
    const sliders = document.querySelectorAll(".production__tab-slider");

    const sliderPrev = document.querySelectorAll(
        ".production__tab-slider-nav-item--prev"
    );
    const sliderNext = document.querySelectorAll(
        ".production__tab-slider-nav-item--next"
    );
    const pagination = document.querySelectorAll(
        ".production__tab-slider-pagination"
    );
    for (i = 0; i < sliders.length; i++) {
        sliders[i].classList.add("production__tab-slider-" + i);
        sliderPrev[i].classList.add("slider-prev-" + i);
        sliderNext[i].classList.add("slider-next-" + i);
        pagination[i].classList.add("slider-pagination-" + i);

        let slider = new Swiper(".production__tab-slider-" + i, {
            spaceBetween: 30,
            loop: true,
            autoHeight: true,
            navigation: {
                nextEl: ".slider-next-" + i,
                prevEl: ".slider-prev-" + i,
            },
            pagination: {
                clickable: true,
                el: ".slider-pagination-" + i,
            },
        });
    }

    //mask
    $(".input-tel").mask("+7 (999) 999-99-99");

    //modal

    const form = document.querySelector(".contacts-form");

    const dialog = document.querySelector(".dialog");

    dialog.addEventListener("close", returnScroll);

    function openModalAndLockScroll() {
        dialog.showModal();
        document.body.classList.add("scroll-lock");
    }

    function returnScroll() {
        document.body.classList.remove("scroll-lock");
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        e.target.reset();
        openModalAndLockScroll();

        setTimeout(function () {
            dialog.close();
        }, 3000);
    });
});
