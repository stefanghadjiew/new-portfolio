export const isElementInView = element => {
    const sectionHeight = element.offsetHeight;
    const sectionTop = element.offsetTop - 100;

    return (
        window.scrollY > sectionTop &&
        window.scrollY <= sectionTop + sectionHeight
    );
};

export const scrollToSection = ({ sectionId }) => {
    const sectionToScrollTo = document.getElementById(sectionId);
    sectionToScrollTo.scrollIntoView();
};
