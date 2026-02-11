

# 📘 Prefix Sum (Map + Math)

If someone reads this carefully, they should be able to solve **70–80% of prefix sum interview problems confidently**.

---

# 🧠 1. What is Prefix Sum?

Prefix Sum is a technique that converts:

> ❌ Repeated range calculations (O(n²))
> into
> ✅ Constant-time lookups (O(1)) after preprocessing

---

# 🎯 Why Interviewers Ask Prefix Sum

They test:

* ✅ Mathematical transformation ability
* ✅ Optimization thinking
* ✅ Can you reduce O(n²) → O(n)?
* ✅ Can you convert range logic into hash lookups?

---

# 🧮 2. The Core Formula (Memorize This)

For array `arr`:

```
prefix[i] = arr[0] + arr[1] + ... + arr[i]
```

The most important identity:

```
Sum(L → R) = prefix[R] - prefix[L - 1]
```

This single formula powers everything.

---

# 🔥 The Real Magic Identity

For subarray problems:

```
prefix[j] - prefix[i] = k
```

Rearrange:

```
prefix[i] = prefix[j] - k
```

💡 Translation:

> If current sum = S
> We need to know if (S - k) existed before.

This is why we use a **HashMap**.

---

# 🧠 When to Think Prefix Sum

If problem contains:

* subarray
* contiguous
* range sum
* count of subarrays
* sum equals K
* negative numbers allowed
* multiple queries

👉 Think **Prefix Sum**

---

# 📦 3 Main Prefix Sum Patterns

You don’t need 20 problems.
You need to master these 3.

---

# 🥇 Pattern 1: Range Sum Query

## 🧠 Use When:

* Static array
* Multiple range queries

---

## ✅ Approach

1. Build prefix array
2. Answer each query in O(1)

---

## 💻 Code Template

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

## ⏱ Complexity

* Precompute: O(n)
* Each query: O(1)

---

# 🥈 Pattern 2: Count Subarrays with Sum = K (MOST IMPORTANT)

## 🧠 Core Idea

We use this identity:

```
prefix[j] - prefix[i] = k
```

Which becomes:

```
prefix[i] = prefix[j] - k
```

So if `(currentSum - k)` appeared before → valid subarray exists.

---

## ✅ Approach

1. Maintain running sum
2. Use Map to store frequency of prefix sums
3. Initialize map with `{0:1}`

---

## 💻 Universal Code Template

```js
function subarraySum(nums, k) {
  let map = new Map();
  map.set(0, 1);   // IMPORTANT

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

## ⚠️ Why `map.set(0,1)`?

It handles subarrays starting at index 0.

---

# 🥉 Pattern 3: Longest Subarray with Sum = K

## 🧠 Difference from Counting Version

Instead of counting occurrences →
We maximize length.

So:

* Store first index of prefix sum
* Don’t overwrite if already exists

---

## 💻 Code Template

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

# 🧠 Pattern Summary Table

| Problem Type     | What to Store in Map |
| ---------------- | -------------------- |
| Count subarrays  | Frequency            |
| Longest subarray | First index          |
| Range query      | Prefix array only    |

---

# 🔥 Advanced Extension Pattern

## Subarrays Divisible by K

Math:

```
(prefix[j] - prefix[i]) % k = 0
```

Becomes:

```
prefix[j] % k == prefix[i] % k
```

---

## 💻 Code Template

```js
function subarraysDivByK(nums, k) {
  let map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let num of nums) {
    sum += num;

    let mod = ((sum % k) + k) % k;

    if (map.has(mod)) {
      count += map.get(mod);
    }

    map.set(mod, (map.get(mod) || 0) + 1);
  }

  return count;
}
```

---

# ⚠️ Prefix Sum vs Sliding Window

| Sliding Window  | Prefix Sum              |
| --------------- | ----------------------- |
| No negatives    | Works with negatives    |
| Window resizing | Mathematical difference |
| Length problems | Count / sum problems    |

If negatives exist → sliding window ❌
Prefix sum ✅

---

# 🧠 Mental Flow in Interview

When you see a problem:

1️⃣ Is it contiguous?
2️⃣ Is it about sum or count?
3️⃣ Can I express condition as prefix difference?
4️⃣ Do I need frequency or first index?

---

# 🎯 What Interviewers REALLY Check

They check if you can:

* Transform math
* Use hashmap properly
* Optimize nested loops
* Handle negative numbers
* Recognize patterns

---

# 🔑 Golden Interview Line

Say confidently:

> “I convert the subarray condition into a prefix sum difference and use a hashmap for constant-time lookup, reducing time complexity to O(n).”

---

# 📌 What You Must Remember

* The identity: `prefix[j] - prefix[i] = k`
* Always initialize `map.set(0,1)`
* Frequency map for count problems
* First index map for longest problems
* Handle modulo carefully for divisible problems

---

# 🚀 After Reading This, You Should Be Able To Solve:

* Range sum queries
* Subarray sum equals K
* Count subarrays with given sum
* Longest subarray with sum K
* Subarrays divisible by K

That covers **70–80% of prefix sum interview questions**.

---

