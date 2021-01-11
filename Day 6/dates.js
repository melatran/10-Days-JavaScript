/*
Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.
*/

function getDayName(dateString) {
  let dayName;
  // Write your code here
  var week = [
      "Sunday", 
      "Monday", 
      "Tuesday", 
      "Wednesday", 
      "Thursday", 
      "Friday", 
      "Saturday"
  ];
  
  var date = new Date(dateString)
  dayName = week[date.getDay()];
  return dayName;
}