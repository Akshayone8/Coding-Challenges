// 2446. Determine if Two Events Have Conflict

// You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

// event1 = [startTime1, endTime1] and
// event2 = [startTime2, endTime2].
// Event times are valid 24 hours format in the form of HH:MM.

// A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

// Return true if there is a conflict between two events. Otherwise, return false.

// Example 1:

// Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
// Output: true
// Explanation: The two events intersect at time 2:00.
// Example 2:

// Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
// Output: true
// Explanation: The two events intersect starting from 01:20 to 02:00.
// Example 3:

// Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
// Output: false
// Explanation: The two events do not intersect.

// #Solution

var haveConflict = function (event1, event2) {
  if (
    (event1[0] <= event2[0] && event1[1] >= event2[0]) ||
    (event2[0] <= event1[0] && event2[1] >= event1[0])
  ) {
    return true;
  } else {
    return false;
  }
};


// Example usage:
console.log(haveConflict(["10:00", "11:00"], ["09:30", "10:30"])); // true
console.log(haveConflict(["01:00", "02:00"], ["01:20", "03:00"])); // true
console.log(haveConflict(["10:00", "11:00"], ["14:00", "15:00"])); // false
