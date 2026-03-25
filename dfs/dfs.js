function dfs(node) {

    if (!node) return BASE_VALUE

    let left = dfs(node.left)
    let right = dfs(node.right)

    return SOME_OPERATION(left, right, node)
}