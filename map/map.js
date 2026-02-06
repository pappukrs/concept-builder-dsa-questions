/**
 * 📝 What is a Map?
 * A Map stores key-value pairs where keys can be of any type (objects, primitive types, etc.).
 * Unlike objects, Map remembers the original insertion order of the keys.
 */

console.log("--- 1. Initialization and Basic Operations ---");
const myMap = new Map();

// Setting key-value pairs
myMap.set('name', 'Pappu');
myMap.set('role', 'Developer');
myMap.set(1, 'Prime Number');
myMap.set(true, 'Boolean Key');

console.log("Map contents:", myMap);

// Getting values
console.log("Value for 'name':", myMap.get('name')); // Pappu
console.log("Value for 1:", myMap.get(1)); // Prime Number

// Checking existence
console.log("Has 'role'?", myMap.has('role')); // true

// Size
console.log("Map Size:", myMap.size); // 4

// Deleting
myMap.delete(true);
console.log("After deleting true key:", myMap.size);


console.log("\n--- 2. Iterating over a Map ---");
// Using destructuring [key, value]
for (let [key, value] of myMap) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// Just keys or just values
// console.log([...myMap.keys()]);
// console.log([...myMap.values()]);


/**
 * 🚀 INTERVIEW & DSA USE CASES
 */
console.log("\n--- 3. DSA Use Case: Frequency Counter (Very Common) ---");
const text = "banana";
const frequency = new Map();

for (let char of text) {
  frequency.set(char, (frequency.get(char) || 0) + 1);
}

console.log("Character frequency in 'banana':", frequency);
// Output: Map(3) { 'b' => 1, 'a' => 3, 'n' => 2 }


console.log("\n--- 4. DSA Use Case: Find First Non-Repeating Character ---");
for (let [char, count] of frequency) {
  if (count === 1) {
    console.log("First unique character:", char);
    break;
  }
}


console.log("\n--- 5. DSA Use Case: Performance vs Objects (O(1) Access) ---");
// Maps are optimized for frequent addition/removal of key-value pairs.
const largeArray = [10, 20, 30, 40, 50];
const indexMap = new Map();
largeArray.forEach((val, idx) => indexMap.set(val, idx));

console.log("Index of 30:", indexMap.get(30)); // 2


/**
 * 🌐 REAL-WORLD USE CASES (Frontend/Backend)
 */
console.log("\n--- 6. Web Dev Use Case: Caching (Memoization) ---");
const memoryCache = new Map();

function getCachedData(id) {
  if (memoryCache.has(id)) {
    console.log("Returning from CACHE for ID:", id);
    return memoryCache.get(id);
  }

  // Simulate DB hit
  console.log("Fetching from DATABASE for ID:", id);
  const data = { id, data: `User data for ${id}` };
  memoryCache.set(id, data);
  return data;
}

getCachedData(1); // Database hit
getCachedData(1); // Cache hit


console.log("\n--- 7. Web Dev Use Case: Grouping Data ---");
const rawUsers = [
  { name: "Alice", city: "New York" },
  { name: "Bob", city: "London" },
  { name: "Charlie", city: "New York" }
];

const cityGroup = new Map();

for (let user of rawUsers) {
  if (!cityGroup.has(user.city)) {
    cityGroup.set(user.city, []);
  }
  cityGroup.get(user.city).push(user.name);
}

console.log("Users grouped by city:", cityGroup);
