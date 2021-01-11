# Regular Expressions
A Regular Expression, or RegEx, is a pattern used to match character combinations in a string. In JavaScript, regular expressions are also objects. We'll start by giving some basic examples, and then explain the syntax needed to construct and understand RegExes in further detail.

A regular expression consists of a pattern string and, potentially, a flag specifying further detail on how the pattern should be matched. We construct regular expressions by using regular expression literals or RegExp class objects.

We generally construct RegEx patterns using the basic characters we wish to match (e.g., abc), or a combination of basic and special characters (e.g., ab\*c or (\d+)\.\d\*).

**Regular Expression Literals:** `const re = /ab+c/;`

**RegExp Objects:** `const re = new RegExp('ab+c');`

## Flags
To create a RegExp object, we use this syntax:

new RegExp(pattern[, flags])
To create a regular expression literal, we use this syntax:

/pattern/flags
If specified, flags can have any combination of the following values:

g: global match.

i: ignore case.

m: multiline. Treats beginning (^) and end ($) characters as working over multiple lines.

u: unicode. Treat pattern as a sequence of unicode code points.

y: sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string.