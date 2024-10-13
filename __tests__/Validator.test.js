import Validator from '../src/Validator';

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('Действительное имя пользователя', () => {
        expect(validator.validateUsername('valid_username-123')).toBe(true);
    });

    test('Имя пользователя с последовательными цифрами', () => {
        expect(validator.validateUsername('user1234name')).toBe(false);
    });

    test('Имя пользователя начинается с цифры', () => {
        expect(validator.validateUsername('1username')).toBe(false);
    });

    test('Имя пользователя заканчивается цифрой', () => {
        expect(validator.validateUsername('username1')).toBe(false);
    });

    test('Имя пользователя начинается с подчеркивания', () => {
        expect(validator.validateUsername('_username')).toBe(false);
    });

    test('Имя пользователя заканчивается подчеркиванием', () => {
        expect(validator.validateUsername('username_')).toBe(false);
    });

    test('Имя пользователя начинается с дефиса', () => {
        expect(validator.validateUsername('-username')).toBe(false);
    });

    test('Имя пользователя заканчивается дефисом', () => {
        expect(validator.validateUsername('username-')).toBe(false);
    });
});
