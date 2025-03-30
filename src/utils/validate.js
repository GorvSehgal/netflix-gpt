export const checkvalidation = (email, password) => {
    let isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    console.log(password)
    if(!isEmailValid) return 'Please enter Valid Email';
    if(!isPasswordValid) return 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number';

    return null;
}