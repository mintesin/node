// Import the OnlineState and OfflineState classes from their respective modules
import OnlineState from "./OnlineState.mjs";
import OfflineState from "./OfflineState.mjs";

// Define the FailSafeSocket class
export class FailSafeSocket {
  // Constructor function that takes an options object as an argument
  constructor(options) {
    // Store the options object as a property of the FailSafeSocket instance
    this.options = options;

    // Initialize an empty queue to store pending data
    this.queue = [];

    // Initialize the current state to null
    this.currentState = null;

    // Initialize the socket object to null
    this.socket = null;

    // Create a states object that maps state names to state instances
    this.states = {
      offline: new OfflineState(this), // Create an instance of OfflineState
      online: new OnlineState(this), // Create an instance of OnlineState
    };

    // Initialize the socket to the offline state
    this.changeState("offline");
  }

  // Method to change the state of the socket
  changeState(state) {
    console.log("Activating the state.......");
    // Update the current state to the specified state
    this.currentState = this.states[state];
    // Activate the new state
    this.currentState.activate();
  }

  // Method to send data over the socket
  send(data) {
    // Forward the data to the send method of the current state
    this.currentState.send(data);
  }
}
