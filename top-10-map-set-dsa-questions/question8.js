/**
 * 8️⃣ Majority Element
 * 
 * Find the element that appears more than n/2 times in an array.
 */

const nums = [2, 2, 1, 1, 1, 2, 2];

// ❌ Brute Force — O(n²)
// Count each element's occurrence one by one.
function majorityElementBrute(nums) {
    for (let num of nums) {
        let count = 0;
        for (let elem of nums) {
            if (elem === num) count++;
        }
        if (count > nums.length / 2) return num;
    }
}

// ✅ Optimized using Map — O(n)
// Building a frequency map.
function majorityElementOptimized(nums) {
    const map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > nums.length / 2) return num;
    }
}

console.log("\n--- Majority Element ---");
console.log("Input:", nums);
console.log("Brute Force Result:", majorityElementBrute(nums));
console.log("Optimized Result:", majorityElementOptimized(nums));
