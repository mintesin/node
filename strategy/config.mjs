// Import the `promises` API from the `fs` module, which provides asynchronous file system operations
import { promises as fs } from 'fs'

// Import the `objectPath` library, which provides a way to navigate and manipulate nested objects
import { objectPath } from 'object-path'

// Export the `Config` class
export class Config {
  // Constructor function, which is called when a new instance of the class is created
  constructor(formatStrategy) {
    // Initialize an empty object to store the configuration data
    this.data = {}

    // Store the format strategy object, which is used to serialize and deserialize the configuration data
    this.formatStrategy = formatStrategy
  }

  // Method to retrieve a value from the configuration data
  get(configPath) {
    // Use the `objectPath` library to retrieve the value at the specified path
    return objectPath.get(this.data, configPath)
  }

  // Method to set a value in the configuration data
  set(configPath, value) {
    // Use the `objectPath` library to set the value at the specified path
    return objectPath.set(this.data, configPath, value)
  }

  // Asynchronous method to load configuration data from a file
  async load(filePath) {
    // Log a message to the console indicating that we're deserializing from the file
    console.log(`Deserializing from ${filePath}`)

    // Read the file contents as a string using the `fs` module
    const fileContents = await fs.readFile(filePath, 'utf8')

    // Deserialize the file contents using the format strategy
    this.data = this.formatStrategy.deserialize(fileContents)
  }

  // Asynchronous method to save the configuration data to a file
  async save(filePath) {
    // Log a message to the console indicating that we're serializing to the file
    console.log(`Serializing to ${filePath}`)

    // Serialize the configuration data using the format strategy
    const serializedData = this.formatStrategy.serialize(this.data)

    // Write the serialized data to the file using the `fs` module
    await fs.writeFile(filePath, serializedData)
  }
}