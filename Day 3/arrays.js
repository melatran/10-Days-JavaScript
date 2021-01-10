//convert array of strings to number
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  var sortArray = nums.sort(function(a, b){return b - a})
  var distinct = (value, index, self) => {
      return self.indexOf(value) === index;
  }
  return nums.filter(distinct)[1]
}