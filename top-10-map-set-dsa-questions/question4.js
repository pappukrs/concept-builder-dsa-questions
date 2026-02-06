/**
 * 4️⃣ Longest Substring Without Repeating Characters
 * 
 * Find the length of the longest substring without repeating characters.
 */

const str = "abcabcbb";

// ❌ Brute Force — O(n³)
// Check all possible substrings and verify uniqueness for each.
function lengthOfLongestSubstringBrute(s) {
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const sub = s.substring(i, j + 1);
            if (new Set(sub).size === sub.length) {
                max = Math.max(max, sub.length);
            }
        }
    }
    return max;
}

// ✅ Optimized using Set (Sliding Window) — O(n)
// Use a set to maintain the current window of unique characters.
function lengthOfLongestSubstringOptimized(s) {
    let set = new Set();
    let left = 0, max = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left++]);
        }
        set.add(s[right]);
        max = Math.max(max, right - left + 1);
    }
    return max;
}

console.log("\n--- Longest Substring Without Repeating Characters ---");
console.log("Input:", str);
console.log("Brute Force Result:", lengthOfLongestSubstringBrute(str));
console.log("Optimized Result:", lengthOfLongestSubstringOptimized(str));
