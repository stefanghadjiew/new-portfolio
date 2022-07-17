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

export const assignClasses = (classes = []) =>
    classes.length <= 1 ? classes : [...classes].join(' ');

export const validateInput = (type, value) => {
    let error;
    switch (type) {
        case 'email':
            const validRegex =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            error = value.match(validRegex) ? '' : 'Not a valid email';
            break;
        case 'text':
            error = value.length > 0 ? '' : 'Please enter a search value';
            break;
        default:
            return '';
    }
    return error;
};
