//recursion: feeding a function into itself until a certain stop condition is met

function factorial(n) {
    //base case
    if (n === 0 || n === 1){
        return 1;
    }

    console.log(`step ${n}: ${n * (n-1)}`)
    return n * factorial(n-1);
}


// sum

function sumR(n){
    if (n === 1){
        return 1
    }
    
    return n + sumR(n-1);
}

console.log(sumR(4))

// fibonacci

function fibR(n){
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }

    return fibR(n - 1) + fibR(n - 2);
}

console.log(fibR(3));

// string reverse

function stringReverse(str){
    if (str.length <= 1){
        return str;
    }

    return str.slice(-1) + stringReverse(str.slice(0, str.length - 1))
}

console.log(stringReverse('nicholas'))

// recursive power function

function powerR(base, exponent){
    if (exponent === 0){
        return 1
    }

    return base * powerR(base, exponent - 1);
}

console.log(powerR(2, 8));

// palindrome checker

function palindromeR(str){
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]){
        return false
    }


    let strRay = str.split('')
    strRay.pop();
    strRay.shift();
    strRay = strRay.join('')
    
    return palindromeR(strRay);

}

console.log(palindromeR('raceecar'));

// binary search

function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: If the search range is empty, the target is not in the array.
    if (left > right) {
      return -1;
    }
  
    // Calculate the middle index of the current search range.
    const mid = Math.floor((left + right) / 2);
  
    // If the middle element is equal to the target, return its index.
    if (arr[mid] === target) {
      return mid;
    }
  
    // If the target is smaller than the middle element, search the left half.
    if (arr[mid] > target) {
      return recursiveBinarySearch(arr, target, left, mid - 1);
    }
  
    // If the target is larger than the middle element, search the right half.
    if (arr[mid] < target) {
      return recursiveBinarySearch(arr, target, mid + 1, right);
    }
  }
  
  // Example usage:
  const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  const target = 12;
  const result = recursiveBinarySearch(sortedArray, target);
  
  if (result !== -1) {
    console.log(`Element ${target} found at index ${result}`);
  } else {
    console.log(`Element ${target} not found in the array`);
  }
  


