/**
 * 🥇 1. Two Sum (MOST ASKED)
 * 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 */

const nums = [2, 7, 11, 15];
const target = 9;

// ❌ Brute Force — O(n²)
// We check every possible pair.
function twoSumBrute(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// ✅ Optimized using Map — O(n)
// We use a Map to store values we've already seen and their indices.
function twoSumOptimized(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];
        if (map.has(need)) {
            return [map.get(need), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log("--- Two Sum ---");
console.log("Input:", nums, "Target:", target);
console.log("Brute Force Result:", twoSumBrute(nums, target));
console.log("Optimized Result:", twoSumOptimized(nums, target));
