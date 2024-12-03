```javascript
function myFunction(a, b) {
  if (b === 0) {
    return Infinity; // Or throw an error, return NaN, or handle as appropriate
  }
  return a / b; // division is safe now
}

console.log(myFunction(10, 0)); // Returns Infinity
console.log(myFunction(10, 2)); // Returns 5
```