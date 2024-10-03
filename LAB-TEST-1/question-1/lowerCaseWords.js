// Question 1: Create a script with a function named lowerCaseWords that takes a mixed array as input.

// The function will do the following. Return a promise that is resolved or rejected.
// Filter the non-strings and lower case the remaining words

const lowerCaseWords = async (mixedArray) => {
  if (!Array.isArray(mixedArray)) {
    throw new Error("Entry must be an array");
  }

  return mixedArray
    .filter((item) => typeof item === "string")
    .map((word) => word.toLowerCase());
};

const mixedArray = ["PIZZA", 10, true, 25, false, "WINGS"];

// Undo Comment to Test
// lowerCaseWords(mixedArray)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
