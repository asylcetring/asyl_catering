document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const items = container.querySelectorAll("img");

    container.addEventListener("scroll", function () {
        items.forEach(img => {
            const rect = img.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const menu = img.nextElementSibling;

            if (menu && (menu.classList.contains("menu1") || menu.classList.contains("menu2"))) {
                if (rect.top >= containerRect.top && rect.bottom <= containerRect.bottom) {
                    menu.classList.add("show");
                } else {
                    menu.classList.remove("show");
                }
            }
        });
    });document.addEventListener("DOMContentLoaded", function () {
        const container = document.querySelector(".container");
        const items = container.querySelectorAll("img");
    
        container.addEventListener("scroll", function () {
            items.forEach(img => {
                const rect = img.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const menu = img.nextElementSibling;
    
                if (menu && (menu.classList.contains("menu1") || menu.classList.contains("menu2"))) {
                    if (rect.top >= containerRect.top && rect.bottom <= containerRect.bottom) {
                        menu.classList.add("show");
                    } else {
                        menu.classList.remove("show");
                    }
                }
            });
        });
    });
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll(".breakfast img"); // Выбираем все картинки
        const foodDescriptions = document.querySelectorAll(".breakfast .food"); // Выбираем все описания
    
        images.forEach((image, index) => {
            image.addEventListener("mouseover", function () {
                foodDescriptions[index].classList.add("show"); // Показываем описание соответствующего блюда
            });
    
            image.addEventListener("mouseleave", function () {
                foodDescriptions[index].classList.remove("show"); // Скрываем при убирании мышки
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll("img"); // Выбираем все картинки
    
        images.forEach(image => {
            const foodDescription = image.nextElementSibling; // Ищем следующий элемент
    
            if (foodDescription && foodDescription.classList.contains("food")) {
                image.addEventListener("mouseover", function () {
                    foodDescription.classList.add("show"); // Показываем
                });
    
                image.addEventListener("mouseleave", function () {
                    foodDescription.classList.remove("show"); // Скрываем
                });
            }
        });
    });
    
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".breakfast img"); // Выбираем все картинки
    const foodDescriptions = document.querySelectorAll(".breakfast .food"); // Выбираем все описания

    images.forEach((image, index) => {
        image.addEventListener("mouseover", function () {
            foodDescriptions[index].classList.add("show"); // Показываем описание соответствующего блюда
        });

        image.addEventListener("mouseleave", function () {
            foodDescriptions[index].classList.remove("show"); // Скрываем при убирании мышки
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img"); // Выбираем все картинки

    images.forEach(image => {
        const foodDescription = image.nextElementSibling; // Ищем следующий элемент

        if (foodDescription && foodDescription.classList.contains("food")) {
            image.addEventListener("mouseover", function () {
                foodDescription.classList.add("show"); // Показываем
            });

            image.addEventListener("mouseleave", function () {
                foodDescription.classList.remove("show"); // Скрываем
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".menu").classList.add("visible");
});
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".breakfast img");
    images.forEach(img => {
        img.addEventListener("load", () => {
            img.classList.add("loaded");
        });
        if (img.complete) {
            img.classList.add("loaded");
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    let element = document.getElementById("animatedElement");

    function isVisible(el) {
        let rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    function restartAnimation() {
        if (isVisible(element)) {
            element.classList.remove("animate__backInDown"); // Remove animation
            void element.offsetWidth; // Force reflow (trick to restart animation)
            element.classList.add("animate__backInDown"); // Add animation back
        }
    }

    setInterval(restartAnimation, 4000); // Restart animation every 4 seconds
});










