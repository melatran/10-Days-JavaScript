/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try{
      var result = s.split("").reverse("").join("")
      console.log(result)
  } catch(error){
      console.log(error.message)
      console.log(s)
  }
}