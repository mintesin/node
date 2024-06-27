// Define the OnlineState class
export class OnlineState {
  // Constructor function that takes a FailSafeSocket instance as an argument
  constructor(failsafeSocket) {
    // Store the FailSafeSocket instance as a property of the OnlineState instance
    this.failsafeSocket = failsafeSocket;

    // Initialize a flag to track whether the socket has disconnected
    this.hasDisconnected = false;
  }

  // Method to send data over the socket
  send(data) {
    // Add the data to the queue
    this.failsafeSocket.queue.push(data);

    // Call the _SafeWrite method to write the data to the socket
    this._SafeWrite(data);
  }

  // Private method to write data to the socket safely
  _SafeWrite(data) {
    // Write the data to the socket
    this.failsafeSocket.socket.write(data, (err) => {
      // If there is no error and the socket has not disconnected, remove the data from the queue
      if (!this.hasDisconnected && !err) {
        this.failsafeSocket.queue.shift();
      }
    });
  }

  // Method to activate the online state
  activate() {
    // Reset the hasDisconnected flag
    this.hasDisconnected = false;

    // Write any pending data in the queue to the socket
    for (const data of this.failsafeSocket.queue) {
      this._SafeWrite(data);
    }

    // Set up an event listener for the error event on the socket
    this.failsafeSocket.socket.once("error", () => {
      // If an error occurs, set the hasDisconnected flag to true and switch to the offline state
      this.hasDisconnected = true;
      this.failsafeSocket.changeState("offline");
    });
  }
}
