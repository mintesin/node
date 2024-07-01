// Import the EventEmitter class from the 'events' module
import { EventEmitter, EventLisnetr } from "events";

// Define a class called DB that extends EventEmitter
class DB extends EventEmitter {
  // Initialize a property called 'connected' to false, indicating that the database connection is not yet established
  connected = false;

  // Initialize an empty array called 'commandQueue' to store database queries that need to be executed when the connection is established
  commandQueue = [];

  // Define an asynchronous method called 'query' that takes a query string as an argument
  async query(queryString) {
    // If the database connection is not yet established
    if (!this.connected) {
      // Log a message indicating that the query is queued
      console.log(`Request queued :${queryString}`);

      // Return a promise that will be resolved or rejected when the query is executed
      return new Promise((resolve, reject) => {
        // Define a function that will execute the query when the connection is established
        const command = () => {
          // Call the 'query' method again with the same query string, which will execute the query when the connection is established
          this.query(queryString).then(resolve, reject);
        };

        // Add the command function to the command queue
        this.commandQueue.push(command);
      });
    } else {
      // If the database connection is established, log a message indicating that the query is sent
      console.log(`Request sent :${queryString}`);
    }
  }

  // Define a method called 'connect' that establishes the database connection
  connect() {
    // Use setTimeout to establish the connection after a 500ms delay
    setTimeout(() => {
      // Set the 'connected' property to true, indicating that the database connection is established
      this.connected = true;

      // Emit a 'connected' event to notify listeners that the connection is established
      this.emit("connected");

      // Execute all the queued queries by calling each function in the command queue
      this.commandQueue.forEach((command) => command());

      // Clear the command queue
      this.commandQueue = [];
    }, 500);
  }
}

// Create an instance of the DB class and export it
export const db = new DB();
