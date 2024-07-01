// Import the EventEmitter class from the 'events' module
import { EventEmitter } from "events";

// Define a DB class that extends the EventEmitter class
class DB extends EventEmitter {
  // Initialize a connected property to false
  connected = false;

  // Define a connect method that establishes a connection to the database
  connect() {
    // Simulate a delay in establishing the connection using a timeout
    setTimeout(() => {
      // Set the connected property to true
      this.connected = true;
      // Emit a "Connect" event to notify listeners that the connection is established
      this.emit("Connected");
    });
  }

  // Define a query method that executes a query on the database
  async query(queryString) {
    // Check if the database is connected
    if (!this.connected) {
      // If not connected, throw an error
      throw new Error("Not connected to the database");
    }
    // If connected, log a message to the console indicating that the query was executed
    console.log(`Query executed: ${queryString}`);
  }
}

// Create an instance of the DB class and export it
export const db = new DB();
