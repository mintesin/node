// Import the jsonOverTcp module from the json-over-tcp-2 package
import jsonOverTcp from 'json-over-tcp-2';

// Define the Offline class
export class Offline {
  // Constructor function that takes a failsafeSocket object as an argument
  constructor(failsafeSocket) {
    // Store the failsafeSocket object as a property of the Offline instance
    this.failsafeSocket = failsafeSocket;
  }

  // Method to send data over the socket
  send(data) {
    // Forward the data to the send method of the failsafeSocket object
    this.failsafeSocket.send(data);
  }

  // Method to activate the offline mode and establish a connection to the server
  activate() {
    // Define a retry function that will be called if the connection attempt fails
    const retry = () => {
      // Schedule a new attempt to connect after a 1-second delay
      setTimeout(() => {
        this.activate();
      }, 1000);
    };

    // Log a message indicating that we're trying to connect to the server
    console.log('Trying to connect........');

    // Create a new TCP connection using jsonOverTcp.connect
    this.failsafeSocket.socket = jsonOverTcp.connect(
      // Pass the options object from the failsafeSocket object as an argument
      this.failsafeSocket.options,
      // Callback function to be called when the connection is established
      () => {
        // Log a message indicating that the connection was established
        console.log('Connection established ');

        // Remove the error event listener to prevent infinite retries
        this.failsafeSocket.socket.removeListener('error', retry);

        // Update the state of the failsafeSocket object to 'online'
        this.failsafeSocket.changeState('online');
      }
    );

    // Set up an event listener for the error event on the socket object
    this.failsafeSocket.socket.on('error', retry);
  }
}