# Loops
Loops are a quick and easy way to repeatedly perform a series of instructions, and they are typically run a finite number of times. JavaScript has the following types of loops:

* for
* while
* do-while
* for-in
* for-of

#### Basic Syntax
```
for (initialization; condition; finalExpression) {
    statement(s);
}
```

**initialization**: An expression or variable declaration that is typically used to initialize a counter variable.

**condition**: This is the termination condition, which is an expression that's evaluated before each pass through the loop. If this expression evaluates to true, then  is executed. If the expression evaluates to false, execution jumps to the first line of code after the end of the loop. If this statement is omitted, then  always evaluates to true.

**finalExpression**: An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of .

**statement**: The statement (or statements) that is executed each time  evaluates to true.

It's important to note that:

- initialization, condition, and finalExpression are optional in for loops

- The head of a for loop typically looks like for (var i = 0; i < maxValue; i++), where  is the maximum value you wish to iterate until.

# If Else Statements
- similar to Ruby with `&&`, `||`, greater than and less than