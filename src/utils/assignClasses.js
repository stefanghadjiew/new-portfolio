export const assignClasses = (classes = []) =>
    classes.length <= 1 ? classes : [...classes].join(' ');
