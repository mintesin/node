const M = ["query"];
const deactivate = Symbol("deactivate");

class QueueingState {
  constructor(db) {
    this.db = db;
    this.commandsQueue = [];

    // Iterate over each method name in the array M
    M.forEach((methodName) => {
      // Dynamically create methods on the instance
      this[methodName] = function (...args) {
        console.log("Command queued:", methodName, args);
        return new Promise((resolve, reject) => {
          // Create a command that will execute the database method with the provided arguments
          const command = () => {
            db[methodName](...args)
              .then(resolve) // Resolve the promise if the database method succeeds
              .catch(reject); // Reject the promise if the database method fails
          };
          // Add the command to the queue
          this.commandsQueue.push(command);
        });
      };
    });
  }

  // Method to execute all queued commands
  [deactivate]() {
    // Execute each command in the queue
    this.commandsQueue.forEach((command) => command());
    // Clear the queue after executing all commands
    this.commandsQueue = [];
  }
}

// Usage example:
const dbConnection = {
  // Simulate a database query method
  query: (sql) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(`Result of ${sql}`), 1000);
    }),
};

const queueingState = new QueueingState(dbConnection);

// Queue a query command
queueingState
  .query("SELECT * FROM users")
  .then((result) => console.log(result)); // Log the result of the query

// Execute the queued commands after 2 seconds
setTimeout(() => {
  queueingState[deactivate]();
}, 2000);
