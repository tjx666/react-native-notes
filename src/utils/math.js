export function average(...elements) {
    if (Array.isArray(elements[0])) {
        return elements[0].reduce((f, b) => f + b, 0) / elements[0].length;
    } else {
        return elements.reduce((f, b) => f + b, 0) / elements.length;
    }
}

export function fix(floatNumber, bitCount=2) {
    const floatPattern = /^\d+(\.\d+)?$/;
    const numberStr = `${floatNumber}`;

    if (!floatPattern.test(numberStr)) throw new TypeError(`${floatNumber}不是浮点数!`);

    if (!numberStr.includes('.')) {
        return floatNumber;
    } else {
        let charArray = numberStr.split('');
        const pointIndex = charArray.findIndex(ele => ele === '.');
        const decimalPlaces = charArray.length - 1 - pointIndex;

        if (decimalPlaces >= bitCount) { 
            return Number.parseFloat(charArray.slice(0, pointIndex + bitCount + 1).join(''));
        } else {
            return floatNumber;
        }
    }
}