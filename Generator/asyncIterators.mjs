// Import the superagent library, which is used to make HTTP requests
import superagent from "superagent";

// Export a class called CheckUrls
export class CheckUrls {
  // The constructor function is called when an instance of the class is created
  // It takes an array of URLs as an argument
  constructor(urls) {
    // Store the array of URLs in an instance variable
    this.urls = urls;
  }

  // Define an async iterator function, which allows the class to be used in a for-await-of loop
  [Symbol.asyncIterator]() {
    // Get an iterator for the array of URLs
    const urlsIterator = this.urls[Symbol.iterator]();

    // Return an object with a next function, which is called on each iteration
    return {
      // The next function is called on each iteration, and returns a promise that resolves to an object with a done property and a value property
      next: async () => {
        // Get the next URL from the iterator
        const iteratorResult = urlsIterator.next();

        // If there are no more URLs, return an object with done set to true
        if (iteratorResult.done) {
          return { done: true };
        }

        // Get the current URL
        const url = iteratorResult.value;

        // Try to make a HEAD request to the URL using superagent
        try {
          // Make the request and get the result
          const checkResult = await superagent.head(url).redirects(2);

          // Return an object with done set to false and a value indicating that the URL is up
          return {
            done: false,
            value: `${url} is up, status: ${checkResult.status}`,
          };
        } catch (err) {
          // If the request fails, return an object with done set to false and a value indicating that the URL is down
          return {
            done: false,
            value: `${url} is down, error: ${err.message}`,
          };
        }
      },
    };
  }
}
