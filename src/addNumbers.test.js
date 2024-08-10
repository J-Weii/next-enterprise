const addNumbers = require('./addNumbers');

test('adds 1 + 2 to equal 3', () => {
    expect(addNumbers(1, 2)).toBe(3);
});

test('adds -1 + -2 to equal -3', () => {
    expect(addNumbers(-1, -2)).toBe(-3);
});

test('throws error when arguments are not numbers', () => {
    expect(() => addNumbers(1, 'a')).toThrow('Both arguments must be numbers');
    expect(() => addNumbers('a', 'b')).toThrow('Both arguments must be numbers');
    expect(() => addNumbers(null, undefined)).toThrow('Both arguments must be numbers');
});
