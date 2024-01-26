export function scrollToForm() {
    window.addEventListener("DOMContentLoaded", function () {
        const footer = document.querySelector(".footer");
        const toFormBtns = document.querySelectorAll(".toForm");
        toFormBtns.forEach((toFormBtn) => {
            toFormBtn.addEventListener("click", function () {
                console.log(footer.getBoundingClientRect().top + scrollY);
                window.scrollTo({
                    top: footer.getBoundingClientRect().top + scrollY - 550,
                    left: 0,
                });
            });
        });
    });
}
