document.addEventListener('DOMContentLoaded', (event) => {
    const preloader = document.getElementById('preloader');
    const body = document.body
    body.classList.add('no-scroll');

    const minimum_display_time = 3200;

    setTimeout(() => {
        body.classList.remove('no-scroll');
        preloader.classList.add("hidden");
        preloader.addEventListener("transitionend", () =>{
            preloader.remove();
        });
    }, minimum_display_time);
});
