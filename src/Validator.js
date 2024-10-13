class Validator {
    validateUsername(username) {
        var regex = /^(?!.*d{4})(?!^[d-_])(?<![_-])[w-]{1,}$/;

        return regex.test(username);
    }
}

export default Validator;
