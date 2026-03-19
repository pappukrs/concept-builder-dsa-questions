function inorder(root, result = []) {

    if (!root) return result

    inorder(root.left, result)

    result.push(root.val)

    inorder(root.right, result)

    return result
}