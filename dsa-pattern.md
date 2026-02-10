

# 🧠 MASTER DSA PATTERN MAP (ENGINEER-LEVEL)

Think of DSA as **10–12 families**, not 1000 problems.

---

## 🔴 PATTERN 1 — ARRAY / STRING SCAN (FOUNDATION)

### 🔍 How to identify

* Input is array or string
* Single pass or simple loops
* No complex constraints

### 🧠 Core idea

> Iterate + track state

### 🛠 Common tools

* Loops
* Counters
* Basic conditionals

### ✅ Canonical problems (DO ONLY THESE)

1. Reverse a string / array
2. Find max / min / sum
3. Remove duplicates
4. Check palindrome
5. Count frequency of characters

📌 **Why this matters**
Everything else builds on this.

---

## 🟠 PATTERN 2 — HASHMAP / SET (LOOKUP & COUNTING)

### 🔍 How to identify

* “Count”, “frequency”, “exists”, “first non-repeating”
* Need fast lookup

### 🧠 Core idea

> Trade memory for speed

### 🛠 Common tools

* `Map`, `Set`
* Object hash

### ✅ Canonical problems

1. Two Sum
2. First non-repeating character
3. Frequency count of elements
4. Remove duplicates using Set
5. Group anagrams

📌 **Interview signal**

> If you don’t think of HashMap here, interviewer notices.

---

## 🟡 PATTERN 3 — TWO POINTERS

### 🔍 How to identify

* Sorted array / string
* “Pair”, “triplet”, “move inward”

### 🧠 Core idea

> Shrink search space intelligently

### 🛠 Common tools

* `left`, `right` pointers

### ✅ Canonical problems

1. Two Sum (sorted array)
2. Reverse array in-place
3. Valid palindrome
4. Container with most water
5. Remove duplicates from sorted array

---

## 🟢 PATTERN 4 — SLIDING WINDOW

### 🔍 How to identify

* “Subarray”, “substring”
* Continuous window
* Optimize from O(n²) → O(n)

### 🧠 Core idea

> Expand + shrink window

### 🛠 Common tools

* Set / Map
* Left & right pointers

### ✅ Canonical problems

1. Longest substring without repeating
2. Max sum subarray of size K
3. Minimum window substring
4. Longest repeating character replacement
5. Count subarrays with sum K

📌 Your **DSA question preparation** already touched this.

---

## 🔵 PATTERN 5 — STACK (NESTING & ORDER)

### 🔍 How to identify

* “Balanced”, “nested”, “previous/next”
* LIFO behavior

### 🧠 Core idea

> Last in, first out

### 🛠 Common tools

* Stack array

### ✅ Canonical problems

1. Valid parentheses
2. Next greater element
3. Min stack
4. Simplify Unix path
5. Evaluate postfix expression

---

## 🟣 PATTERN 6 — RECURSION BASICS

### 🔍 How to identify

* Problem breaks into smaller same problem
* Tree-like logic

### 🧠 Core idea

> Solve + trust recursion

### 🛠 Common tools

* Recursive calls
* Base case

### ✅ Canonical problems

1. Factorial
2. Fibonacci
3. Reverse string recursively
4. Print subsets
5. Power function

---

## 🟤 PATTERN 7 — GRID / MATRIX DFS-BFS (VERY IMPORTANT)

### 🔍 How to identify

* 2D grid
* Move in directions
* Boundaries involved

### 🧠 Core idea

> Explore neighbors safely

### 🛠 Common tools

* DFS / BFS
* Visited matrix

### ✅ Canonical problems

1. Number of islands
2. Flood fill
3. Max area of island
4. Shortest path in grid
5. Rotting oranges

📌 This is where your **word search problem lives** (advanced form).

---

## ⚫ PATTERN 8 — BACKTRACKING (TRY / UNDO)

### 🔍 How to identify

* “Try all possibilities”
* “Each element used once”
* Constraints + choices

### 🧠 Core idea

> Try → fail → undo → try next

### 🛠 Common tools

* DFS
* `visited`
* Backtracking

### ✅ Canonical problems

1. Word search (your problem ✅)
2. Generate permutations
3. Generate subsets
4. Sudoku solver
5. N-Queens

📌 **Key learning**
Backtracking is DFS + undo.

---

## 🟧 PATTERN 9 — BINARY SEARCH

### 🔍 How to identify

* Sorted input
* “Find first/last”, “minimum”, “maximum”

### 🧠 Core idea

> Divide search space

### 🛠 Common tools

* `low`, `high`, `mid`

### ✅ Canonical problems

1. Binary search
2. First & last position
3. Search in rotated array
4. Peak element
5. Square root of number

---

## 🟥 PATTERN 10 — GREEDY (LOCAL OPTIMAL)

### 🔍 How to identify

* Choose best at each step
* No backtracking

### 🧠 Core idea

> Local optimal → global optimal

### 🛠 Common tools

* Sorting
* Simple decisions

### ✅ Canonical problems

1. Activity selection
2. Minimum coins
3. Jump game
4. Gas station
5. Interval scheduling

---

## 🟦 PATTERN 11 — HEAP / PRIORITY QUEUE

### 🔍 How to identify

* “Top K”
* “Minimum / maximum frequently”

### 🧠 Core idea

> Maintain best candidates

### 🛠 Common tools

* Min-heap / Max-heap

### ✅ Canonical problems

1. Kth largest element
2. Top K frequent elements
3. Merge K sorted lists
4. Median from data stream
5. Reorganize string

---

## 🧩 WHERE YOUR QUESTION FITS (FINAL CONNECTION)

Your interview problem:

> Matrix + word + movement + no reuse + wildcard

Maps to:

```
Grid / Matrix
→ DFS
→ Backtracking
→ Constraint variation
```

That’s **Pattern 7 + Pattern 8 combined**.

---

# 🎯 HOW TO USE THIS ROADMAP (IMPORTANT)

❌ Don’t solve 100 problems
✅ Solve **5 per pattern**

That’s:

* ~50–60 problems total
* Covers most interviews

---

## 🧠 INTERVIEW SUPERPOWER (MEMORIZE THIS)

Before coding, say:

> “This problem fits the ___ pattern.
> I’ll use ___ approach.”

Interviewers **love** this clarity.

---

