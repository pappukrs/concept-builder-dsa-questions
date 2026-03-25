function hasPathSum(root, targetSum) {

    if (!root) return false

    // leaf node
    if (!root.left && !root.right) {
        return targetSum === root.val
    }

    let remaining = targetSum - root.val

    return hasPathSum(root.left, remaining) ||
        hasPathSum(root.right, remaining)
}