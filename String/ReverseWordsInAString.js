// Reverse Words in a String


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function reverseWords(s) {
    return s
        .trim()                // remove outer spaces
        .split(/\s+/)          // split by 1 or more spaces
        .reverse()             // reverse the array
        .join(" ");            // join back with single spaces
}
let a=0