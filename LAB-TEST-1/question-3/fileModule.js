// Question 3: File Module

// Create a script that will do the following:

const fs = require("fs");
const path = require("path");

const LogDirectory = path.join(__dirname, "logs");

// Remove all the files from the Logs directory
// If exist, output the file names to delete
// Remove the Logs directory

function removeAllLogFiles() {
  if (fs.existsSync(LogDirectory)) {
    const AllFiles = fs.readdirSync(LogDirectory);
    for (let i = 0; i < AllFiles.length; i++) {
      const fileMainPath = path.join(LogDirectory, AllFiles[i]);
      fs.unlinkSync(fileMainPath);
      console.log("Deleted file: " + AllFiles[i]);
    }
    fs.rmdirSync(LogDirectory);
    console.log("Logs directory removed successfully");
  } else {
    console.log("No Logs directory found.");
  }
}

// Create a Logs directory, if it does not exist
// Change the current process to the new Logs directory
// Create 10 log files and write some text into the file
// Output the file names to the console

function createLogFiles() {
  if (!fs.existsSync(LogDirectory)) {
    fs.mkdirSync(LogDirectory);
    console.log("Logs directory successfully created");
  } else {
    console.log("Logs directory already exists");
  }

  for (let i = 0; i < 10; i++) {
    const fileMainPath = path.join(LogDirectory, "log" + i + ".txt");
    fs.writeFileSync(fileMainPath, "This is log file " + i);
    console.log("File is in path: " + fileMainPath);
  }
}

// Undo Comment to Test
// removeAllLogFiles();
// createLogFiles();
