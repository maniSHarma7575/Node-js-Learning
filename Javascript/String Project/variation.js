/** @param {string} name */
export function getNumberOfChars(name) {

    // return the number of characters in: name
    return name.length;

}

export function getFirstChar(name) {
    return name[0];
    // return the first character of: name

}

export function getLastChar(name) {
    return name[name.length - 1];
    // return the last character of: name

}

export function getLower(name) {
    return name.toLowerCase();
    // return name all in lower case (example: "ABC" becomes "abc")

}

export function getUpper(name) {
    return name.toUpperCase();
    // return name all in upper case (example: "abc" becomes "ABC")

}

export function getCapitalized(name) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
    // return a capitalized version of name (example: "alEX" becomes "Alex")

}

export function getClean(name) {
    return name.trim();
    // return name without trailing and leading space (example: " alex " becomes: "alex")

}