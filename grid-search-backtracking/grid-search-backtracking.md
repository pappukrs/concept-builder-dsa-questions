

#  MASTER ROADMAP: GRID / SEARCH / BACKTRACKING PROBLEMS

These problems all belong to **one family**.

> **Family name:**
> **State-space search on grids (DFS / Backtracking)**

---

##  ROADMAP OVERVIEW (BIG PICTURE)

```
Level 0  Fundamentals
Level 1  Grid traversal
Level 2  Path-based DFS
Level 3  Backtracking constraints
Level 4  Variations (wildcards, reuse, limits)
Level 5  Pattern recognition (instant)
```

We’ll map your question into this.

---

##  LEVEL 0 — FUNDAMENTALS (MUST BE AUTOMATIC)

You must be comfortable with:

* 2D arrays
* Indexing (`matrix[r][c]`)
* Boundary checks
* Directions:

  ```
  up    = r-1, c
  down  = r+1, c
  left  = r, c-1
  right = r, c+1
  ```

If this isn’t automatic  everything else breaks.

 You already have this.

---

##  LEVEL 1 — GRID TRAVERSAL (BFS / DFS)

### Pattern signal:

> “You are given a matrix/grid and allowed to move in directions”

Examples:

* Flood fill
* Count islands
* Shortest path in grid

### Core idea:

* Visit neighbors
* Track visited
* Stay in bounds

This level answers:

> **“Where can I go?”**

---

##  LEVEL 2 — PATH-BASED SEARCH (KEY SHIFT)

This is where **your interview question lives**.

### Pattern signal (VERY IMPORTANT):

If the problem says:

* “form a word”
* “follow a sequence”
* “match characters step by step”
* “each cell used once”

 **ALERT:**
This is **NOT simple traversal**.
This is **path-based DFS**.

### Mental shift:

>  “Does this character exist?”
>  “Can I walk a continuous path that matches the sequence?”

---

##  LEVEL 3 — BACKTRACKING (THE CORE CONCEPT)

### Pattern signal:

* “Each cell can be used only once”
* “Try all possibilities”
* “Undo choices”

That means:

> You must **try  fail  undo  try another path**

### This introduces:

* `visited[][]`
* Recursive DFS
* Backtracking step (`visited = false`)

---

##  LEVEL 4 — CONSTRAINT VARIATIONS

Now problems add **twists**, not new algorithms.

Your problem has:

* Wildcard `?`
* Movement constraints
* One-time cell usage

These are **modifiers**, not new logic.

### Important realization:

> Wildcard  new algorithm
> It’s just a **matching condition change**

---

##  LEVEL 5 — INSTANT PATTERN RECOGNITION (GOAL)

After practice, your brain should do this:

> Matrix + word + directions + no reuse
>  **Word Search / DFS + Backtracking**

This should take **< 30 seconds**.

---

#  WHERE YOUR QUESTION FITS (VERY IMPORTANT)

Your problem is exactly:

> **Word Search + Wildcard + Single-use cells**

This is a **canonical pattern**.

---

##  HOW TO IDENTIFY THIS PATTERN IN INTERVIEWS

Ask yourself these **5 questions** immediately:

### 1 Is input a grid/matrix?

 Yes  grid problem

### 2 Is there a sequence/word/path to match?

 Yes  path-based search

### 3 Can you move in directions?

 Yes  DFS/BFS

### 4 Can a cell be reused?

 No  backtracking required

### 5 Are there special match rules (wildcard)?

 Yes  modify condition, not algorithm

If answers are mostly “yes” 
 **DFS + Backtracking**

---

#  STANDARD APPROACH TEMPLATE (MEMORIZE THIS)

Whenever you see this pattern, follow this **exact structure**:

### Step 1 — Parse input

Matrix, rows, cols, target string

### Step 2 — Try every cell as a start

Because starting point is unknown

### Step 3 — DFS function

Parameters:

```
(row, col, index_in_word)
```

### Step 4 — Base case

```
if index == word.length  success
```

### Step 5 — Boundary + validity checks

* Out of bounds
* Already visited
* Character mismatch (handle wildcard)

### Step 6 — Mark visited

### Step 7 — Explore 4 directions

### Step 8 — Backtrack (unmark)

This **never changes**, only conditions do.

---

#  ADDING YOUR QUESTION INTO THE ROADMAP

Your exact problem is now stored in your brain as:

```
Category: Grid path search
Pattern: Word search
Technique: DFS + Backtracking
Variation: Wildcard matching
```

Next time you see something similar, you won’t panic.

---

#  WHY YOU GOT STUCK (IMPORTANT)

You were thinking at **Level 2**, but the problem required **Level 3**.

You thought:

> “Search letters one by one in matrix”

But the problem required:

> “Search a continuous path with backtracking”

This is **very common** and not a failure.

---

#  HOW TO PRACTICE THIS PROPERLY (NO GRIND)

Don’t solve 100 random DSA problems.

Instead:

### Practice **1 problem per pattern**

For this pattern:

* Word search
* Maze path
* Path with obstacles
* Sudoku (later)

After 3–4 problems, your brain locks it in.

---

#  FINAL MENTAL CHECKLIST (USE IN INTERVIEW)

Say this in your head:

> “This is a grid-based path search with constraints.
> I’ll use DFS with backtracking, track visited cells, and try all start points.”

If you can say this confidently 
You already **understand the problem deeply**.

---

