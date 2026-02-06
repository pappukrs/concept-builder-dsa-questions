/**
 * 5️⃣ Check Anagram
 * 
 * Check if two strings are anagrams of each other.
 */

const s1 = "anagram", t1 = "nagaram";

// ❌ Brute Force (Sort) — O(n log n)
// Sorting both strings and comparing.
function isAnagramBrute(s, t) {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
}

// ✅ Optimized using Map — O(n)
// Frequency counting using a Map.
function isAnagramOptimized(s, t) {
    if (s.length !== t.length) return false;
    const map = new Map();

    for (let ch of s) map.set(ch, (map.get(ch) || 0) + 1);

    for (let ch of t) {
        if (!map.has(ch) || map.get(ch) === 0) return false;
        map.set(ch, map.get(ch) - 1);
    }

    return true;
}

console.log("\n--- Check Anagram ---");
console.log("Input:", s1, t1);
console.log("Brute Force Result:", isAnagramBrute(s1, t1));
console.log("Optimized Result:", isAnagramOptimized(s1, t1));
