
export const checkValidate = (email, password, firstName) => {
    const emailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const name = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(firstName);

    if(!emailValidate) return "Enter valid Email ID";
    if(!passwordValidate) return "Enter valid password";
    if(!name) return "Enter Valid name";
    return null;
}