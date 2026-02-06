# 🧠 Concept Builder: DSA Sets & Maps

A structured guide to mastering `Set` and `Map` in JavaScript for DSA, interviews, and real-world development.

---

## 1. Sets (Unique Collections)

### What is a Set?
A `Set` is a built-in JavaScript object that stores **unique** values of any type. It automatically handles duplicates for you.

### Core Methods & Functions
| Method | Description | Time Complexity |
| :--- | :--- | :--- |
| `add(value)` | Adds a new element to the Set. | O(1) |
| `has(value)` | Returns `true` if the value exists. | O(1) |
| `delete(value)` | Removes an element. | O(1) |
| `size` | Returns the number of elements. | O(1) |
| `clear()` | Removes all elements. | O(1) |

### Use Cases in DSA & Interviews
*   **Removing Duplicates:** `[...new Set(array)]` is the fastest way to get unique items.
*   **Fast Lookups:** Checking if an item exists in a Set is `O(1)`, compared to `O(n)` in an Array.
*   **Intersection/Union:** Finding common elements between two sets.
*   **Tracking Visited Nodes:** Essential for Graph/Tree traversals (BFS/DFS).

### Use Cases in Web Development
*   **Frontend:** Tracking unique selected items in a multi-select UI.
*   **Backend:** Storing unique IDs of online users or active socket connections.
*   **Auth:** Managing unique permission tags or feature flags for a session.

---

## 2. Maps (Key-Value Pairs)

### What is a Map?
A `Map` is a collection of keyed data items, similar to an `Object`. However, Maps allow keys of **any type** (including objects and numbers) and maintain the **insertion order**.

### Core Methods & Functions
| Method | Description | Time Complexity |
| :--- | :--- | :--- |
| `set(key, val)` | Stores the value by the key. | O(1) |
| `get(key)` | Returns the value by the key. | O(1) |
| `has(key)` | Returns `true` if the key exists. | O(1) |
| `delete(key)` | Removes the element by key. | O(1) |
| `size` | Returns current element count. | O(1) |

### Use Cases in DSA & Interviews
*   **Frequency Counter:** Counting occurrences of characters in a string or elements in an array.
*   **Two Sum Optimization:** Reducing `O(n²)` nested loops to `O(n)` by storing "complements" in a Map.
*   **Grouping Data:** Categorizing items based on a shared property (e.g., grouping users by city).
*   **LRU Cache:** Implementation often relies on Map because it preserves insertion order.

### Use Cases in Web Development
*   **Frontend:** Storing component state based on unique IDs.
*   **Backend (Caching):** Implementing in-memory caching (Memoization) to avoid expensive DB calls or API requests.
*   **Dashboards:** Grouping raw API data for charts and analytics reports.

---

## 🚀 Getting Started
Check out the deep-dive examples here:
*   [Set Examples](./set/set.js)
*   [Map Examples](./map/map.js)
*   [Top 10 Map & Set Problems](./top-10-map-set-dsa-questions/Readme.md)

