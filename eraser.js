function romanToInt(s) {
    // Create a dictionary to map Roman numeral symbols to their values
    const romanToIntMap = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
    ]);
  
    let total = 0;
    let prevValue = 0;
  
    // Iterate through the Roman numeral string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
      const symbol = s[i];
      const value = romanToIntMap.get(symbol);
  
      // If the previous value is less than the current value, subtract the previous value
      // This accounts for cases like IV (4) or IX (9)
      if (prevValue > value) {
        total -= value;
      } else {
        total += value;
      }
  
      // Update the previous value for the next iteration
      prevValue = value;
    }
  
    return total;
  }
  
  // Test cases
  console.log(romanToInt("III"));       // Output: 3
  console.log(romanToInt("LVIII"));     // Output: 58
  console.log(romanToInt("MCMXCIV"));   // Output: 1994
  


