// Import the WeakMap class
import { WeakMap } from 'weak-map';
// Create a new WeakMap instance
const weakMap = new WeakMap();
// Export the WeakMap instance
export { weakMap };
// Create a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (weakMap.has(endpoint)) {
    // If the endpoint is in the WeakMap, increment the value associated with it
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    // If the endpoint is not in the WeakMap, add it with a value of 1
    weakMap.set(endpoint, 1);
  }
  // Check if the number of queries for the endpoint is greater than or equal to 5
  if (weakMap.get(endpoint) >= 5) {
    // If the number of queries is greater than or equal to 5, throw an error
    throw new Error('Endpoint load is high');
  }
}
