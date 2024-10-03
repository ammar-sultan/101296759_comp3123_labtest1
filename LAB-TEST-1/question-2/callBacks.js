// Question 2: Given the script file callbacks.js

// callBacks.js
const delayedSuccess = () => {
  setTimeout(() => {
    let success = { message: "delayed success!" };
    console.log(success);
  }, 500);
};

const delayedException = () => {
  setTimeout(() => {
    try {
      throw new Error("error: delayed exception!");
    } catch (e) {
      console.error(e);
    }
  }, 500);
};

// Write a script that does the following:s
// Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
// Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 500ms.
// Call both promises separately and handle the resolved and reject results and then output to the console

const AllinOnePromise = (isResolved) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isResolved) {
        resolve({ message: "delayed success!" });
      } else {
        reject({ error: "delayed exception!" });
      }
    }, 500);
  });
};

// Undo Comment to Test
// AllinOnePromise(false)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// AllinOnePromise(true)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
