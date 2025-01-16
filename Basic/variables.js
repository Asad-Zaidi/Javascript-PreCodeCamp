/*

Introduction to Variables

What is a variable?

A variable is a named storage location used to store data.

x = 10
x + 5 = 15

*/

// Rules of naming variables

/* 

1. Variable names must start with a letter, underscore (_), or dollar sign ($).
2. Variable names can contain letters, numbers, underscores, and dollar signs.
3. Variable names are case-sensitive (myVariable and MyVariable are different variables).
4. Variable names cannot be JavaScript keywords or reserved words.

*/

// Casing of variable names

/* 

camelCase: first letter will be lowercase and uppercase the first letter of every word after that.
Example:
        myVariableName, myVariable, firstName, lastName, masterCard.

PascalCase: all first letter of the word will be uppercase. (mostly used for classes in JavaScript)
Example:        
        MyVariableName, MyVariable, FirstName, LastName, MasterCard.

snake_case: all words are separated by underscores.
        my_variable_name, my_variable, first_name, last_name, master_card. (mostly for constants)

*/

// Three ways to declare variables [var, let, const]

/*

var: This keyword is used to declare a variable. It is functionally equivalent to let but it is not recommended for modern JavaScript.
let: This keyword is used to declare a variable. It has block scope, meaning the variable is only accessible within the block where it is declared.
const: This keyword is used to declare a constant. It is similar to let but it cannot be reassigned.

*/

// Example:

let firstName = "Asad"
/*

1. We declare a variable using the let keyword.
2. We assign a value to the variable using the "=" operator.
3. We use the variable name to access and use its value.

*/

console.log(firstName)

// Reassigning a variable

/* 

- You don't need to re-initialize the variable with 'let', 'var' or 'const' keywords
- only the variable name is needed with assignment operators and the new value.

*/

firstName = "John"

console.log(firstName)

// Using 'const' keyword        

const PI = 3.1415

/*

1. We declare a constant using the 'const' keyword.
2. We assign a value to the constant using the "=" operator.
3. We cannot reassign the value of the constant.

*/

console.log(PI);

// Trying to reassign a constant

// pi = 3.1416

// console.log(PI); // This will throw a TypeError: Assignment to constant variable.

/* 
1) Create a varibale to store the last name of the person namd 'Smith'.
2) Print the varibale to the console
3) Reassign the value of the varibale to 'John'
4) Print the varibale to the console again to see the change

*/

let lastName = "Smith"

console.log(lastName)

lastName = "John"

console.log(lastName)

// 60 * 60 * 24

const sec = 60
const min = 60
const hour = 24

const totalSecondsInADay = sec * min * hour

console.log(totalSecondsInADay)
