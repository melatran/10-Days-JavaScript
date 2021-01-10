# Try, Catch, Finally, Throw
 - the `try` block is the first step in error handling and is used for any block of code that's likely to raise an exception

 - it should contain one or more statements to be executed followed by a catch clause or finally

- *try-catch*, *try-finally*, *try-catch-finally*

- the `catch` block is excecuted only if an exception is thrown when executing the code within the try blck

- the `finally` block is optional and executes after the try and catch blocks

- finally always executes regardless if an exception was thrown or caught (it's always returned)

- the `throw` block throws an exception

**Example 1**

```
"use strict"

function getElement(arr, pos) {
    return arr[pos];
}


//let arr = [1, 2, 3, 4, 5];

try {
    console.log(getElement(arr, 4));
} 
catch (e) {
    console.log(e.message);
}
console.log("The program continued executing!");
```

**Example 2**

```
try {
    console.log(getElement(arr, 4));
} 
finally {
    console.log("Finally Block");
}
console.log("The program continued executing!");
```

**Example 3**

```
function throwString() {
    // Generate an exception with a String value
    throw "some exception";
}

function throwFalse() {
    // Generate an exception with a boolean value of false
    throw false;
}

function throwNumber() {
    // Generate an exception with a Number value of -1
    throw -1;
}

try {
    throwString();
}
catch (e) {
    console.log(e);
}

try {
    throwFalse();
}
catch (e) {
    console.log(e);
}

try {
    throwNumber();
}
catch (e) {
    console.log(e);
}
```