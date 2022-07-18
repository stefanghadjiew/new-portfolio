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
