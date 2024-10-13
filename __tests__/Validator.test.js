import Validator from '../src/Validator';

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('valid username', () => {
        expect(validator.validateUsername('valid_username-123')).toBe(true);
    });

    test('username with consecutive digits', () => {
        expect(validator.validateUsername('user1234name')).toBe(false);
    });

    test('username starts with digit', () => {
        expect(validator.validateUsername('1username')).toBe(false);
    });

    test('username ends with digit', () => {
        expect(validator.validateUsername('username1')).toBe(false);
    });

    test('username starts with underscore', () => {
        expect(validator.validateUsername('_username')).toBe(false);
    });

    test('username ends with underscore', () => {
        expect(validator.validateUsername('username_')).toBe(false);
    });

    test('username starts with hyphen', () => {
        expect(validator.validateUsername('-username')).toBe(false);
    });

    test('username ends with hyphen', () => {
        expect(validator.validateUsername('username-')).toBe(false);
    });
});
