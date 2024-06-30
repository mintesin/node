export class zmqMIddlewareManager {
  constructor(socket) {
    this.socket = socket; // Store the socket instance
    this.inBoundMIddleware = []; // Initialize an array to hold inbound middleware functions
    this.outBoundMiddleware = []; // Initialize an array to hold outbound middleware functions
    this.handleIncomingMessages() // Start handling incoming messages
      .catch((err) => console.error(err)); // Log any errors that occur during message handling
  }

  async handleIncomingMessages() {
    for await (const [message] of this.socket) {
      // Continuously listen for incoming messages from the socket
      await this.executeMiddleware(this.inBoundMIddleware, message) // Process the message through inbound middleware
        .catch((err) => {
          console.error("Error while processing the message", err);
        }); // Log errors if middleware execution fails
    }
  }

  async send(message) {
    const finalMessage = await this.executeMiddleware(
      this.outBoundMiddleware,
      message
    ); // Process the message through outbound middleware
    return this.socket.send(finalMessage); // Send the processed message through the socket
  }

  use(middleware) {
    if (middleware.inbound) {
      this.inBoundMIddleware.push(middleware.inbound); // Add the inbound middleware function to the array
    }
    if (middleware.outbound) {
      this.outBoundMiddleware.push(middleware.outbound); // Add the outbound middleware function to the array
    }
  }

  async executeMiddleware(middleware, initialMessage) {
    let message = initialMessage; // Initialize the message to be processed
    for await (const middlewareFunc of middleware) {
      // Iterate over each middleware function
      message = await middlewareFunc.call(this, message); // Execute the middleware function and update the message
    }
    return message; // Return the final processed message
  }
}
