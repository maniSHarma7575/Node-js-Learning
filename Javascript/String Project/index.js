//import { getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper, getCapitalized, getClean } from "../variation.js";

/** @param {string} name */
function getNumberOfChars(name) {

    // return the number of characters in: name
    return name.length;

}

function getFirstChar(name) {
    return name[0];
    // return the first character of: name

}

function getLastChar(name) {
    return name[name.length - 1];
    // return the last character of: name

}

function getLower(name) {
    return name.toLowerCase();
    // return name all in lower case (example: "ABC" becomes "abc")

}

function getUpper(name) {
    return name.toUpperCase();
    // return name all in upper case (example: "abc" becomes "ABC")

}

function getCapitalized(name) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
    // return a capitalized version of name (example: "alEX" becomes "Alex")

}

function getClean(name) {
    return name.trim();
    // return name without trailing and leading space (example: " alex " becomes: "alex")

}

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");
const answer7 = document.querySelector("#answer7");

const name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
    const value = name.value;

    answer1.textContent = getNumberOfChars(value);
    answer2.textContent = getFirstChar(value);
    answer3.textContent = getLastChar(value);
    answer4.textContent = getLower(value);
    answer5.textContent = getUpper(value);
    if (value) {
        answer6.textContent = getCapitalized(value);
    } else {
        answer6.textContent = "";
    }
    answer7.textContent = getClean(value);
});