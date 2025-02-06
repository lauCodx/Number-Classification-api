const isPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
};

const isPerfect = (n) => {
    if (n <= 1) return false;
    let sum = 1;
    const sqrt = Math.sqrt(n);
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            sum += i;
            const counterpart = n / i;
            if (counterpart !== i) sum += counterpart;
        }
    }
    return sum === n;
};

const isArmstrong = (n) => {
    const numStr = Math.abs(n).toString();
    const power = numStr.length;
    const sum = numStr.split('').reduce((acc, digit) => 
        acc + Math.pow(parseInt(digit), power), 0);
    return sum === Math.abs(n);
};

const getDigitSum = (n) => {
    return Math.abs(n).toString().split('').reduce(
        (sum, digit) => sum + parseInt(digit), 0);
};
module.exports = {isArmstrong, isPrime, isPerfect, getDigitSum};