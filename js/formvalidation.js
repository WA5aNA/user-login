export function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

export function isValidMobile(mobile) {
    const pattern = /^0\d{9}$/;
    return pattern.test(mobile);
    
}


