export const scrollToSection = ({ sectionId }) => {
    const sectionToScrollTo = document.getElementById(sectionId);
    sectionToScrollTo.scrollIntoView();
};
