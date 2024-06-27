// Define an array of modifier names
const MODIFIER_NAMES = ['Swap', 'write', 'full'];



FileSy
// Define a class called ImmutableBuffer
class ImmutableBuffer {
  // Constructor function for the class
  constructor(size, executor) {
    // Allocate a new Buffer of the specified size
    const buffer = Buffer.alloc(size);
   console.log(sizeof)
    // Create an empty object to store modifier functions
    const modifiers = {};

    // Iterate over the properties of the Buffer object
    for (const prop in buffer) {
      // Check if the property is a function
      if (typeof buffer[prop] !== 'function') {
        // If it's not a function, skip to the next iteration
        continue;
      }

      // Check if the property name starts with any of the modifier names
      if (MODIFIER_NAMES.some((m) => prop.startsWith(m))) {
        // If it does, add the bound function to the modifiers object
        modifiers[prop] = buffer[prop].bind(buffer);
      } else {
        // If it doesn't, add the bound function to the current object (this)
        this[prop] = buffer[prop].bind(buffer);
      }
    }

    // Call the executor function with the modifiers object as an argument
    executor(modifiers);
  }
}