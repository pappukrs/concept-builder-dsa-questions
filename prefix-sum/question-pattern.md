

# 🥇 PROBLEM 1 — Range Sum Query

## ❓ Problem

```
arr = [2, 4, 1, 6, 3]
Query: sum from index 1 to 3
```

---

## 🧠 Pattern Applied

This is:

> ✅ Pattern 1: Range Query Optimization

Why?

* Static array
* Multiple queries possible
* No dynamic updates
* Just need fast range lookup

We use:

```
Sum(L → R) = prefix[R] - prefix[L-1]
```

---

## 🧪 Dry Run

### Step 1: Build Prefix Array

```
arr = [2, 4, 1, 6, 3]
```

Prefix:

```
index:   0  1  2  3   4
arr:     2  4  1  6   3
prefix:  2  6  7  13  16
```

---

### Step 2: Apply Formula

```
L = 1
R = 3

Sum = prefix[3] - prefix[0]
    = 13 - 2
    = 11
```

Correct:

```
4 + 1 + 6 = 11
```

---

## 💻 Code

```js
function buildPrefix(arr) {
  let prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }
  return prefix;
}

function rangeSum(prefix, L, R) {
  if (L === 0) return prefix[R];
  return prefix[R] - prefix[L - 1];
}
```

---

# 🥈 PROBLEM 2 — Subarray Sum Equals K

## ❓ Problem

```
arr = [1, 2, 3]
k = 3
```

Find count of subarrays with sum = 3.

---

## 🧠 Pattern Applied

This is:

> ✅ Pattern 2: Prefix + Frequency Map

We use identity:

```
prefix[j] - prefix[i] = k
→ prefix[i] = prefix[j] - k
```

Meaning:
If current sum = S
We need to know if `(S - k)` appeared before.

---

## 🧪 Dry Run (Step-by-Step)

Initialize:

```
map = {0:1}
sum = 0
count = 0
```

---

### 🔹 i = 0 (num = 1)

```
sum = 1
sum - k = -2
not found
map = {0:1, 1:1}
```

---

### 🔹 i = 1 (num = 2)

```
sum = 3
sum - k = 0
0 found in map (1 time)

count = 1

map = {0:1, 1:1, 3:1}
```

Subarray:

```
[1,2]
```

---

### 🔹 i = 2 (num = 3)

```
sum = 6
sum - k = 3
3 found (1 time)

count = 2
```

Subarray:

```
[3]
```

---

### ✅ Final Answer = 2

---

## 💻 Code

```js
function subarraySum(nums, k) {
  let map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}
```

---

# 🥉 PROBLEM 3 — Longest Subarray with Sum K

## ❓ Problem

```
arr = [1, -1, 5, -2, 3]
k = 3
```

Find longest length.

---

## 🧠 Pattern Applied

This is:

> ✅ Pattern 3: Prefix + First Index Map

Difference from previous problem:

* We maximize length
* We store first occurrence only

---

## 🧪 Dry Run

Initialize:

```
map = {}
sum = 0
maxLen = 0
```

---

### 🔹 i = 0

```
sum = 1
store 1 → index 0
```

---

### 🔹 i = 1

```
sum = 0
store 0 → index 1
```

---

### 🔹 i = 2

```
sum = 5
store 5 → index 2
```

---

### 🔹 i = 3

```
sum = 3
sum == k → yes

maxLen = 4
```

Subarray:

```
[1, -1, 5, -2]
```

---

### 🔹 i = 4

```
sum = 6
sum - k = 3
3 seen at index 3

length = 4 - 3 = 1
maxLen still 4
```

---

### ✅ Final Answer = 4

---

## 💻 Code

```js
function longestSubarray(nums, k) {
  let map = new Map();
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      maxLen = i + 1;
    }

    if (map.has(sum - k)) {
      maxLen = Math.max(maxLen, i - map.get(sum - k));
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return maxLen;
}
```

---

# 🎯 How These 3 Patterns Differ

| Pattern          | What We Store   | Goal              |
| ---------------- | --------------- | ----------------- |
| Range Query      | Prefix array    | Fast lookup       |
| Count Subarrays  | Frequency map   | Count occurrences |
| Longest Subarray | First index map | Maximize length   |

---

# 🧠 Final Mental Framework

When you see problem:

### Step 1

Is it contiguous?

### Step 2

Is it sum-based?

### Step 3

Convert to:

```
prefix[j] - prefix[i]
```

### Step 4

Ask:

* Count? → frequency map
* Longest? → first index map
* Range query? → prefix array only

---

# 🔥 If You Truly Understand This

You can now solve:

* Subarray sum equals K
* Longest subarray sum K
* Subarrays divisible by K
* Binary array equal 0/1
* Continuous subarray sum

That’s most prefix questions.

---
