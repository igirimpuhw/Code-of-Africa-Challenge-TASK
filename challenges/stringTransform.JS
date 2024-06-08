function transformString(s) {
    const length = s.length;

    if (length % 15 === 0) {
        return toAscii(reverseString(s));
    } else if (length % 5 === 0) {
        return toAscii(s);
    } else if (length % 3 === 0) {
        return reverseString(s);
    } else {
        return s;
    }
}

function reverseString(s) {
    return s.split('').reverse().join('');
}

function toAscii(s) {
    return s.split('').map(char => char.charCodeAt(0)).join(' ');
}

// Example usage
console.log(transformString("Hamburger"));  // Output: regrebmaH
console.log(transformString("Pizza"));      // Output: 80 105 122 122 97
console.log(transformString("Chocolate Chip Cookie"));  // Output: 101 105 107 111 111 67 32 112 105 104 67 32 101 116 97 108 111 99 111 68 32
