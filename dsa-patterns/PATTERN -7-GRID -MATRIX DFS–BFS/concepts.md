

# 🧠 PATTERN 7 — GRID / MATRIX DFS–BFS (DEEP UNDERSTANDING)

---

## 1️⃣ WHAT THIS PATTERN REALLY IS (MENTAL MODEL)

> **You are inside a 2D world, standing on cells, and you can move to neighbors.**

That’s it.

Everything else (islands, flood fill, rotting oranges, word search) is just a **story on top of this**.

---

## 2️⃣ HOW TO IDENTIFY THIS PATTERN (VERY IMPORTANT)

The moment you see **ANY** of these:

* 2D array / matrix
* Grid of `0/1`, `X/O`, characters
* “Move up, down, left, right”
* “Connected”, “neighbor”, “adjacent”
* “Spread”, “fill”, “reach”, “path”

🚨 **Immediately think:**

> “This is a GRID TRAVERSAL problem”

---

## 3️⃣ CORE IDEA (THIS MUST CLICK)

### ❌ Wrong thinking

> “Let me solve cell by cell independently”

### ✅ Correct thinking

> “If I enter a cell, I must explore its neighbors safely”

So the job becomes:

* Visit a cell
* Visit its neighbors
* Don’t revisit
* Don’t go out of bounds

This is **graph traversal**, just drawn as a matrix.

---

## 4️⃣ WHY DFS / BFS?

A grid is secretly a **graph**:

* Each cell = node
* Each neighbor = edge

So we use:

* **DFS** → go deep
* **BFS** → go level by level

---

## 5️⃣ DFS vs BFS — WHEN TO USE WHICH?

This is **critical**.

### Use **DFS** when:

* You want to **explore a region fully**
* Counting / marking / area
* “How many?”, “How big?”, “Does it exist?”

Examples:

* Number of islands
* Flood fill
* Max area of island
* Word search

---

### Use **BFS** when:

* You care about **minimum distance / time / steps**
* “Shortest”, “minimum”, “how long until”

Examples:

* Shortest path in grid
* Rotting oranges
* Minimum steps to reach target

📌 **One-line rule**

> DFS = explore
> BFS = measure distance/time

---

## 6️⃣ THE 4 RULES YOU MUST NEVER FORGET

Every grid DFS/BFS must obey these:

### Rule 1 — Boundary check

```text
row >= 0 && row < rows
col >= 0 && col < cols
```

---

### Rule 2 — Valid cell check

Depends on problem:

* `grid[r][c] == 1`
* `grid[r][c] == 'O'`
* Not water, not visited, etc.

---

### Rule 3 — Visited marking

To avoid infinite loops:

* Modify grid (`grid[r][c] = 0`)
* OR use `visited[][]`

---

### Rule 4 — Explore neighbors

Always in directions:

```
up, down, left, right
```

(Unless diagonals are explicitly allowed)

---

## 7️⃣ GENERIC GRID DFS TEMPLATE (MEMORIZE THIS)

You don’t need to memorize problems — memorize **this**.

```text
dfs(r, c):
    if out of bounds → return
    if cell not valid → return
    mark visited
    dfs(up)
    dfs(down)
    dfs(left)
    dfs(right)
```

Every DFS grid problem is a **variation of this**.

---

## 8️⃣ GENERIC GRID BFS TEMPLATE (MENTAL)

```text
queue = starting cells
while queue not empty:
    process current level
    push valid neighbors
```

---

## 9️⃣ WHY YOUR WORD SEARCH PROBLEM IS “ADVANCED GRID DFS”

Because it adds:

* Path constraint (match word)
* Backtracking
* “Use cell once”

But the **base pattern is still grid DFS**.

---

# 🧪 NOW LET’S PRACTICE — 5 CANONICAL PROBLEMS

We will do **conceptual practice**, not dump code.

---

## 🟩 PROBLEM 1 — Number of Islands (DFS)

### Problem:

Grid of `0`s and `1`s.
Count how many islands (`1`s connected horizontally/vertically).

### Pattern recognition:

* Grid
* Connected components
* Count regions

➡️ **DFS**

### Thinking steps:

1. Loop through grid
2. When you see `1`, that’s a **new island**
3. DFS to mark entire island as visited
4. Increase count

📌 **Key insight**

> DFS is used to “erase” an island once found

---

## 🟦 PROBLEM 2 — Flood Fill (DFS)

### Problem:

Change color of starting cell and all connected same-color cells.

### Pattern recognition:

* Grid
* Spread to neighbors
* Same value

➡️ **DFS**

### Thinking steps:

1. Start from given cell
2. DFS neighbors with same color
3. Change color as you go

📌 **Key insight**

> Flood fill = DFS coloring problem

---

## 🟨 PROBLEM 3 — Max Area of Island (DFS)

### Problem:

Find largest connected region of `1`s.

### Pattern recognition:

* Grid
* Measure size of region

➡️ **DFS**

### Thinking steps:

1. When you find `1`, start DFS
2. Each DFS returns area count
3. Track max

📌 **Key insight**

> DFS can return values (not just visit)

---

## 🟥 PROBLEM 4 — Shortest Path in Grid (BFS)

### Problem:

Find minimum steps from start to end.

### Pattern recognition:

* Grid
* Minimum steps / shortest path

➡️ **BFS**

### Thinking steps:

1. Push start into queue
2. Process level by level
3. First time reaching target = shortest path

📌 **Key insight**

> BFS guarantees shortest path in unweighted grid

---

## 🟧 PROBLEM 5 — Rotting Oranges (BFS)

### Problem:

Rotten oranges spread rot to adjacent fresh ones every minute.

### Pattern recognition:

* Grid
* Spread over time
* Minimum time

➡️ **BFS**

### Thinking steps:

1. Push all rotten oranges into queue
2. BFS level by level = minutes
3. Count time until no fresh left

📌 **Key insight**

> Multiple BFS sources + level tracking

---

## 🧠 SUMMARY YOU SHOULD INTERNALIZE

Say this in your head when you see a grid:

> “This is a grid traversal problem.
> I need DFS if I’m exploring regions,
> BFS if I’m measuring distance or time.”

If that sentence comes naturally → **pattern mastered**.

---


