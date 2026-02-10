
**Two Pointers** is the *next natural step* after Sliding Window.
If Sliding Window = **moving a window**,
Two Pointers = **moving two independent references smartly**.

I’ll teach this in **mental model  patterns  JS DSA questions  interview framing**.

---

#  What is Two Pointer Technique?

Two Pointers means:

> Use **two indexes/pointers** to traverse a data structure **together or toward each other** to reduce time complexity.

Usually optimizes:

```
O(n²)  O(n)
```

---

#  When Should You Think of Two Pointers?

Look for keywords 

| Clue                      | Think        |
| ------------------------- | ------------ |
| sorted array              | Two pointers |
| pair / triplet            | Two pointers |
| left & right              | Two pointers |
| remove / move / rearrange | Two pointers |
| palindrome                | Two pointers |

---

#  Types of Two Pointer Patterns (VERY IMPORTANT)

## 1 Opposite Direction Pointers

```
left       right
```

Used for:

* Pair sum in sorted array
* Palindrome check
* Reverse array/string

---

## 2 Same Direction Pointers (Fast & Slow)

```
slow  fast 
```

Used for:

* Remove duplicates
* Cycle detection
* In-place array modification

---

## 3 Merge Pattern

```
i   (array1)
j   (array2)
```

Used for:

* Merge sorted arrays
* Merge intervals

---

#  PATTERN 1: Opposite Direction (Most Classic)

##  Question 1: Check Palindrome

### Example

```js
s = "madam"  true
s = "hello"  false
```

---

###  JS Solution

```js
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}
```

###  Mental Model

```
compare  move inward
```

---

##  Question 2: Two Sum (Sorted Array)

### Example

```js
nums = [1,2,3,4,6]
target = 6
Output  [1,3] (indexes)
```

---

###  JS Solution

```js
function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }

  return [];
}
```

###  Why it works

* Array is **sorted**
* Increase sum  move left
* Decrease sum  move right

---

#  PATTERN 2: Same Direction (Fast & Slow)

##  Question 3: Remove Duplicates (Sorted Array)

### Example

```js
nums = [1,1,2,2,3]
Output  [1,2,3]
```

---

###  JS Solution

```js
function removeDuplicates(nums) {
  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1; // new length
}
```

###  Mental Model

```
fast explores
slow builds result
```

---

##  Question 4: Move Zeros to End

### Example

```js
nums = [0,1,0,3,12]
Output  [1,3,12,0,0]
```

---

###  JS Solution

```js
function moveZeroes(nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }

  return nums;
}
```

---

#  PATTERN 3: Merge Pattern

##  Question 5: Merge Two Sorted Arrays

### Example

```js
a = [1,3,5]
b = [2,4,6]
```

---

###  JS Solution

```js
function mergeSorted(a, b) {
  let i = 0, j = 0;
  let result = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) result.push(a[i++]);
    else result.push(b[j++]);
  }

  return result.concat(a.slice(i)).concat(b.slice(j));
}
```

---

#  Two Pointer vs Sliding Window (VERY COMMON CONFUSION)

| Sliding Window    | Two Pointer             |
| ----------------- | ----------------------- |
| window concept    | independent movement    |
| mostly contiguous | sorted / rearrangement  |
| sum / count       | comparison / matching   |
| add + remove      | move pointers logically |

 **Sliding Window is actually a specialized form of Two Pointers**

---

#  Interview Explanation Template

Use this  verbatim:

> “Since the array is sorted, I can use two pointers from both ends.
> I move the pointers based on whether the current sum is greater or smaller than the target, achieving O(n) time.”

 This shows **problem recognition skill**.

---

#  MUST-DO Two Pointer Interview Questions

### Easy  Medium

1. Reverse string
2. Valid palindrome
3. Two sum II (sorted)
4. Move zeros
5. Remove duplicates

### Medium  Hard

6. 3Sum
7. Container with most water
8. Trapping rain water
9. Minimum difference pair
10. Sort colors (Dutch flag)

---

#  Next Logical Steps (Choose One)

1 **Two Pointer + Sliding Window mixed problems**
2 **3Sum & 4Sum deep dive**
3 **Fast & Slow pointer (Linked List cycles)**
4 **When NOT to use Two Pointers (common traps)**

Tell me which one 
