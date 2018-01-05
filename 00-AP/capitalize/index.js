// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.split(" ")
            .map((x) => { return x.charAt(0).toUpperCase() + x.slice(1) })
            .join(" ")
}

// console.log( capitalize('hi there, how is it going?') );

module.exports = capitalize;