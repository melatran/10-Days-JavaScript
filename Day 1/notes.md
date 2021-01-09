# Arithmetic Operators
1. **Unary**: single operator such as i++ where `++` is the operator

2. **Binary**: requires two operators such as `a + b = c` where `+` is the binary operator

3. **Ternary**: conditional operator such as `a ? b : c`

4. Addition (+)

5. Subtraction (-)

6. Multiplication (*)

7. Division (/)

8. Remainder (%)

    ```
    6 % 3 // evaluates to 0
    3 % 2 // evaluates to 1
    4 % 10 // evaluates to 4
    ```

9. Exponents (**)

10. Unary Negation (-)

11. Unary Plus (+)

12. Increment (++)

13. Decrement (--)

# Functions

- Functions in JavaScript are declared using the function keyword.
- A function declaration creates a function that's a Function object having all the properties, methods, and behaviors of Function objects
- By default, functions return the value undefined
- to return any other value, the function must have a return statement that consists of the return keyword followed by the value to be returned (this can be a literal value, a variable, or even a call to a function).

# Variable Declarations

**var**
We use the var keyword to declare variables. The scope of a variable declared using this keyword is within the context wherever it was declared. For variables declared outside any function, this means they are globally available throughout the program. For variables declared within a function, this means they are only available within the function itself.

**let**
We use the let keyword to declare variables that are limited in scope to the block, statement, or expression in which they are used. This is unlike the var keyword, which defines a variable globally or locally to an entire function regardless of block scope.

**const**
We use the const keyword to create a read-only reference to a value, meaning the value referenced by this variable cannot be reassigned. Because the value referenced by a constant variable cannot be reassigned, JavaScript requires that constant variables always be initialized.


