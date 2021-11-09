export const name = (value) => {
    if (value?.trim() === '') {
        return 'Please enter your name';
    }
    return '';
}

export const phone = (value) => {
    if (value?.trim() === '') {
        return 'Please enter your phone';
    }
    const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im ;
    if (!regEx.test(value)) {
        return 'Invalid input format';
    }
    return '';
}

export const email = (value) => {
    if (value?.trim() === '') {
        return 'Please enter your email';
    }
    const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!regEx.test(value)) {
        return 'Invalid input format';
    }
    return '';
}

export const payment = (value) => {
    if (value === 'Payment method') {
        return 'Please choose payment method';
    }
    return '';
}
