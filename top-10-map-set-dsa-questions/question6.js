/**
 * 6️⃣ Intersection of Two Arrays
 * 
 * Find the common elements between two arrays.
 */

const a = [1, 2, 2, 1], b = [2, 2];

// ❌ Brute Force — O(n * m)
// Nested loops to find intersection.
function intersectionBrute(a, b) {
    let res = [];
    for (let i of a) {
        for (let j of b) {
            if (i === j && !res.includes(i)) {
                res.push(i);
            }
        }
    }
    return res;
}

// ✅ Optimized using Set — O(n + m)
// Use a Set for O(1) lookups.
function intersectionOptimized(a, b) {
    const setA = new Set(a);
    // filter and convert back to unique array using another set if needed, 
    // or just filter unique from b based on setA.
    return [...new Set(b.filter(x => setA.has(x)))];
}

console.log("\n--- Intersection of Two Arrays ---");
console.log("Input:", a, b);
console.log("Brute Force Result:", intersectionBrute(a, b));
console.log("Optimized Result:", intersectionOptimized(a, b));
