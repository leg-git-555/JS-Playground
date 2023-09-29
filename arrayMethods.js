function print(){
    console.log(arr);
}
// .push() adds one or more elements to the end of an array
const arr = [1,2,3,4]
arr.push(5, 6);

//.pop() removes and returns the last element from an array
let pop = arr.pop()

//.unshift() adds one or more elements to the beginning of an array
let str = 'appy'
    function addToFront(str, char){
        let charRay = str.split('');
        charRay.unshift(char) // add to front of array;
        charRay = charRay.join('');
        console.log(charRay)
    }

// /shift() removes and return the first element from an array
    // console.log(arr.shift());
    // console.log(arr);

// .concat() combines two or more arrays and returns the new array
let newRay = arr.concat(arr);

// .slice() returns a portion of an array as a new array without modifying the original array
let sliceRay = newRay.slice(2, 7);
// console.log(newRay);
// console.log(sliceRay);

// .splice() adds or removes elements from an array at a specified index
const months = ['Jan', 'March', 'April', 'June'];
const monthsB = [...months]; // to keep from modifying months, use the spread method

monthsB.splice(1, 0, 'February')
// console.log(monthsB);
// console.log(months);

// .forEach() executes a provided function once for each array element

let lower = "lowerase string that will become capitalized"

let upper = lower.split('').forEach(char) => char.

console.log(upper)
