 **Top 10 Set / Map Interview Problems (DSA)**
 **Brute Force  Optimized using Map / Set**

This is **exactly what interviewers test**:

> *Can you recognize when to replace nested loops with Map/Set?*

I’ll show:

*  Brute-force approach
*  Optimized Map/Set approach
*  Interview talking point

---

##  1. Two Sum (MOST ASKED)

###  Brute Force — O(n²)

```js
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) return [i, j];
  }
}
```

###  Optimized using Map — O(n)

```js
const map = new Map();

for (let i = 0; i < nums.length; i++) {
  const need = target - nums[i];
  if (map.has(need)) return [map.get(need), i];
  map.set(nums[i], i);
}
```

 **Interview line**

> “Map avoids nested loops by storing visited elements.”

---

##  2. Find Duplicate Number

###  Brute Force

```js
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) return arr[i];
  }
}
```

###  Optimized using Set

```js
const set = new Set();

for (let num of arr) {
  if (set.has(num)) return num;
  set.add(num);
}
```

---

##  3. First Non-Repeating Character

###  Brute Force

```js
for (let i = 0; i < s.length; i++) {
  if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return s[i];
}
```

###  Optimized using Map

```js
const map = new Map();

for (let ch of s) map.set(ch, (map.get(ch) || 0) + 1);
for (let ch of s) if (map.get(ch) === 1) return ch;
```

---

## 4 Longest Substring Without Repeating Characters

###  Brute Force — O(n³)

###  Optimized using Set (Sliding Window)

```js
let set = new Set();
let left = 0, max = 0;

for (let right = 0; right < s.length; right++) {
  while (set.has(s[right])) {
    set.delete(s[left++]);
  }
  set.add(s[right]);
  max = Math.max(max, right - left + 1);
}
```

---

## 5 Check Anagram

###  Brute Force (Sort)

```js
s.split('').sort().join('') === t.split('').sort().join('');
```

###  Optimized using Map

```js
const map = new Map();

for (let ch of s) map.set(ch, (map.get(ch) || 0) + 1);
for (let ch of t) {
  if (!map.has(ch)) return false;
  map.set(ch, map.get(ch) - 1);
}
```

---

## 6 Intersection of Two Arrays

###  Brute Force

```js
let res = [];
for (let i of a)
  for (let j of b)
    if (i === j) res.push(i);
```

###  Optimized using Set

```js
const set = new Set(a);
const res = b.filter(x => set.has(x));
```

---

## 7 Subarray Sum Equals K

###  Brute Force — O(n²)

###  Optimized using Map (Prefix Sum)

```js
const map = new Map();
map.set(0, 1);

let sum = 0, count = 0;

for (let num of nums) {
  sum += num;
  if (map.has(sum - k)) count += map.get(sum - k);
  map.set(sum, (map.get(sum) || 0) + 1);
}
```

 **Interview favorite** 

---

## 8 Majority Element

###  Brute Force

```js
let count = {};
for (let num of nums) count[num] = (count[num] || 0) + 1;
```

###  Optimized using Map

```js
const map = new Map();

for (let num of nums) {
  map.set(num, (map.get(num) || 0) + 1);
  if (map.get(num) > nums.length / 2) return num;
}
```

---

## 9 Find All Unique Pairs with Given Sum

###  Brute Force

```js
for (let i = 0; i < arr.length; i++)
  for (let j = i + 1; j < arr.length; j++)
    if (arr[i] + arr[j] === k) console.log(arr[i], arr[j]);
```

###  Optimized using Set

```js
const set = new Set();

for (let num of arr) {
  if (set.has(k - num)) console.log(num, k - num);
  set.add(num);
}
```

---

##  Group Anagrams

###  Brute Force

```js
// Compare each word with others
```

###  Optimized using Map

```js
const map = new Map();

for (let word of words) {
  const key = word.split('').sort().join('');
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(word);
}
```

---

#  PATTERN RECOGNITION (VERY IMPORTANT)

| Problem Type       | Use       |
| ------------------ | --------- |
| Duplicate check    | Set       |
| Frequency count    | Map       |
| Fast lookup        | Set       |
| Avoid nested loops | Map / Set |
| Grouping           | Map       |
| Sliding window     | Set / Map |

---

##  Interview Cheat Line (Say This Confidently)

> “Whenever I see nested loops for lookup or frequency, I try to replace them with Map or Set to reduce time complexity from O(n²) to O(n).”

---

##  What Should We Do Next?

I strongly recommend next:
1 **Sliding Window using Map (deep dive)**
2 **LRU Cache implementation using Map**
3 **Prefix sum + HashMap patterns**
4 **Map vs Object vs Redis (system design)**


