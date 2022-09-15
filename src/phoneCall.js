function solution(min1, min2_10, min11, s) {
    let minutes = 0;
    if (s >= min1) {
        s -= min1;
        minutes++;
    } else {
        return minutes;
    }
    if (s >= min2_10 * 9) {
        s -= min2_10 * 9;
        minutes += 9;
    } else {
        minutes += Math.floor(s / min2_10);
        return minutes;
    }
    minutes += Math.floor(s / min11);
    return minutes;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test phoneCall

// alternative solution
