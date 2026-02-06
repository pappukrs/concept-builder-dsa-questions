/**
 * 🥈 2. Find Duplicate Number
 * 
 * Find a duplicate number in an array.
 */

const arr = [1, 3, 4, 2, 2];

// ❌ Brute Force — O(n²)
// Comparing each element with every other element.
function findDuplicateBrute(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return arr[i];
        }
    }
}

// ✅ Optimized using Set — O(n)
// Storing visited elements in a Set for O(1) average lookup.
function findDuplicateOptimized(arr) {
    const set = new Set();

    for (let num of arr) {
        if (set.has(num)) return num;
        set.add(num);
    }
}

console.log("\n--- Find Duplicate Number ---");
console.log("Input:", arr);
console.log("Brute Force Result:", findDuplicateBrute(arr));
console.log("Optimized Result:", findDuplicateOptimized(arr));
