/**
 * 7️⃣ Subarray Sum Equals K
 * 
 * Given an array of integers and an integer k, 
 * return the total number of continuous subarrays whose sum equals to k.
 */

const nums = [1, 1, 1], k = 2;

// ❌ Brute Force — O(n²)
// Check all possible subarrays.
function subarraySumBrute(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) count++;
        }
    }
    return count;
}

// ✅ Optimized using Map (Prefix Sum) — O(n)
// Map stores the frequency of prefix sums.
function subarraySumOptimized(nums, k) {
    const map = new Map();
    map.set(0, 1); // Base case: prefix sum of 0 appears once.

    let sum = 0, count = 0;
    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

console.log("\n--- Subarray Sum Equals K ---");
console.log("Input:", nums, "k:", k);
console.log("Brute Force Result:", subarraySumBrute(nums, k));
console.log("Optimized Result:", subarraySumOptimized(nums, k));
