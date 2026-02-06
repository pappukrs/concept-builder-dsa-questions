/**
 * 9️⃣ Find All Unique Pairs with Given Sum
 * 
 * Find all unique pairs in an array that sum up to a target value k.
 */

const arr = [1, 2, 3, 4, 3], k = 6;

// ❌ Brute Force — O(n²)
// Nested loops to find pairs.
function findPairsBrute(arr, k) {
    const results = [];
    const seenPairs = new Set();
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) {
                const pair = [arr[i], arr[j]].sort().join(',');
                if (!seenPairs.has(pair)) {
                    results.push([arr[i], arr[j]]);
                    seenPairs.add(pair);
                }
            }
        }
    }
    return results;
}

// ✅ Optimized using Set — O(n)
// Use a Set to find complement in O(1).
function findPairsOptimized(arr, k) {
    const set = new Set();
    const results = [];
    const seenPairs = new Set();

    for (let num of arr) {
        const complement = k - num;
        if (set.has(complement)) {
            const pair = [num, complement].sort().join(',');
            if (!seenPairs.has(pair)) {
                results.push([num, complement]);
                seenPairs.add(pair);
            }
        }
        set.add(num);
    }
    return results;
}

console.log("\n--- Unique Pairs with Sum ---");
console.log("Input:", arr, "k:", k);
console.log("Brute Force Result:", findPairsBrute(arr, k));
console.log("Optimized Result:", findPairsOptimized(arr, k));
