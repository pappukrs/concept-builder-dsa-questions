/**
 * 🔟 Group Anagrams
 * 
 * Group a list of words that are anagrams of each other.
 */

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

// ❌ Brute Force — O(n² * k log k)
// Compare each word with others by sorting.
function groupAnagramsBrute(words) {
    const res = [];
    const visited = new Array(words.length).fill(false);

    for (let i = 0; i < words.length; i++) {
        if (visited[i]) continue;
        const group = [words[i]];
        visited[i] = true;
        const sortedI = words[i].split('').sort().join('');
        for (let j = i + 1; j < words.length; j++) {
            if (!visited[j] && words[j].split('').sort().join('') === sortedI) {
                group.push(words[j]);
                visited[j] = true;
            }
        }
        res.push(group);
    }
    return res;
}

// ✅ Optimized using Map — O(n * k log k)
// Use the sorted string as a key in a Map.
function groupAnagramsOptimized(words) {
    const map = new Map();

    for (let word of words) {
        const key = word.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(word);
    }
    return Array.from(map.values());
}

console.log("\n--- Group Anagrams ---");
console.log("Input:", words);
console.log("Brute Force Result:", groupAnagramsBrute(words));
console.log("Optimized Result:", groupAnagramsOptimized(words));
