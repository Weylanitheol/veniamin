// Define a type that can be either a string or a number
type StrOrNum = string | number;

// Function to display the value
function displayValue(value: StrOrNum): void {
  if (typeof value === 'string') {
    console.log(`The string is: ${value}`);
  } else {
    console.log(`The number is: ${value}`);
  }
}

// Example usage of the 'displayValue' function
const exampleString: StrOrNum = 'Hello, TypeScript!';
const exampleNumber: StrOrNum = 42;

displayValue(exampleString); // Output: The string is: Hello, TypeScript!
displayValue(exampleNumber); // Output: The number is: 42
