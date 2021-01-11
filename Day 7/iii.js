/*
Complete the function in the editor below by returning a RegExp object, , that matches every integer in some string .
*/

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  let re = new RegExp(/\d+/g);
  return re;
}

//this works even without declaring new RegExp object