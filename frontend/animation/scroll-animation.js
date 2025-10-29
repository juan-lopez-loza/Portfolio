function revealOnScroll() {
    const reveals = document.getElementsByClassName("reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealOnScroll);

function resizeOnScroll(){
    const smallers = document.getElementsByClassName("smaller");
    const scrollPosition = window.scrollY;
    const triggerDistance = 400;
    const ratio = Math.min(1, Math.max(0, 1- (scrollPosition / triggerDistance)));
    const minScale = 0.35;
    const reductionFactor = ratio * (1 - minScale) + minScale;
    const maxTranslate = 695;
    const translationY = (1 - ratio) * maxTranslate
    for (let i = 0; i < smallers.length; i++) {
            smallers[i].style.transform = `scale(${reductionFactor}) translateY(${translationY}px)`;
    }
}
window.addEventListener("scroll", resizeOnScroll);
