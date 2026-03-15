function insertBST(root, val) {

    if (!root) {
        return { val, left: null, right: null }
    }

    if (val < root.val) {
        root.left = insertBST(root.left, val)
    } else {
        root.right = insertBST(root.right, val)
    }

    return root
}