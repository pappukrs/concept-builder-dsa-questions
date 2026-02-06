/**
 * 🥉 3. First Non-Repeating Character
 * 
 * Find the first character in a string that does not repeat.
 */

const s = "leetcode";

// ❌ Brute Force — O(n²)
// Using indexOf and lastIndexOf which both scan the string.
function firstUniqCharBrute(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return s[i];
    }
    return null;
}

// ✅ Optimized using Map — O(n)
// Single pass to build frequency map, second pass to find first count of 1.
function firstUniqCharOptimized(s) {
    const map = new Map();

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let ch of s) {
        if (map.get(ch) === 1) return ch;
    }
    return null;
}

console.log("\n--- First Non-Repeating Character ---");
console.log("Input:", s);
console.log("Brute Force Result:", firstUniqCharBrute(s));
console.log("Optimized Result:", firstUniqCharOptimized(s));
