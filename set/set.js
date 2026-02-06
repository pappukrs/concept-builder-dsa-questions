/**
 * 📝 What is a Set?
 * A Set is a collection of UNIQUE values. No duplicates allowed.
 * It is commonly used in DSA to track visited elements or remove duplicates.
 */

console.log("--- 1. Initialization and Basic Operations ---");
const mySet = new Set();

// Adding elements
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(1); // Duplicate - will be ignored

console.log("Set after adding elements:", mySet); // Set(4) { 1, 2, 3, 4 }

// Checking for existence (O(1) time complexity)
console.log("Has 3?", mySet.has(3)); // true
console.log("Has 8?", mySet.has(8)); // false

// Size of the set
console.log("Set size:", mySet.size); // 4

// Deleting elements
mySet.delete(1);
console.log("After deleting 1:", mySet);


console.log("\n--- 2. Iterating over a Set ---");
for (let val of mySet) {
   console.log("Value:", val);
}


console.log("\n--- 3. Converting between Set and Array ---");
// Set to Array (using Spread operator or Array.from)
const setAsArray = [...mySet];
const setAsArray2 = Array.from(mySet);
console.log("As Array:", setAsArray);

// Array to Set (Removing duplicates from array)
const arrWithDuplicates = [1, 2, 3, 4, 3, 2, 1, 5];
const uniqueArray = [...new Set(arrWithDuplicates)];
console.log("Original Array:", arrWithDuplicates);
console.log("Unique Array (via Set):", uniqueArray);


/**
 * 🚀 INTERVIEW & DSA USE CASES
 */
console.log("\n--- 4. DSA Use Case: Intersection of Two Arrays ---");
const arrA = [4, 6, 2, 4, 5, 1, 7];
const arrB = [5, 1, 2, 3, 8, 0, 7, 7];

const setA = new Set(arrA);
// Only keep elements from B that are ALSO in A
const intersection = arrB.filter(item => setA.has(item));
const uniqueIntersection = [...new Set(intersection)];

console.log("Array A:", arrA);
console.log("Array B:", arrB);
console.log("Unique Intersection:", uniqueIntersection);


console.log("\n--- 5. DSA Use Case: Fast Duplicate Check ---");
function hasDuplicates(arr) {
   return new Set(arr).size !== arr.length;
}
console.log("Does [1,2,3,4] have duplicates?", hasDuplicates([1, 2, 3, 4])); // false
console.log("Does [1,2,2,4] have duplicates?", hasDuplicates([1, 2, 2, 4])); // true


/**
 * 🌐 REAL-WORLD USE CASES (Frontend/Backend)
 */
console.log("\n--- 6. Web Dev Use Case: Tracking Online/Visited Users ---");
// Keeping track of unique websocket IDs or user tokens
const activeUsers = new Set();
activeUsers.add('user_101');
activeUsers.add('user_102');
activeUsers.add('user_101'); // Won't add again

console.log("Active Unique Users:", activeUsers);
console.log("Is user_101 online?", activeUsers.has('user_101'));