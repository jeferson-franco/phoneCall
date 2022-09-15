const solution = require('./phoneCall.js');

test('test 1', () => {
    expect(solution(3, 1, 2, 20)).toBe(14);
});

test('test 2', () => {
    expect(solution(2, 2, 1, 2)).toBe(1);
});

test('test 3', () => {
    expect(solution(10, 1, 2, 22)).toBe(11);
});

test('test 4', () => {
    expect(solution(2, 2, 1, 24)).toBe(14);
});

test('test 5', () => {
    expect(solution(1, 2, 1, 6)).toBe(3);
});

test('test 6', () => {
    expect(solution(10, 10, 10, 8)).toBe(0);
});
