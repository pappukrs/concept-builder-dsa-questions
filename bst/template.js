function dfs(node) {

    if (!node) return { valid: true, height: 0 }

    let left = dfs(node.left)
    let right = dfs(node.right)

    let valid = CHECK(left, right, node)

    let height = 1 + Math.max(left.height, right.height)

    return { valid, height }
}