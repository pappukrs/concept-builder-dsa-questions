function dfs(node) {

    if (!node) return BASE

    let left = dfs(node.left)
    let right = dfs(node.right)

    return PROCESS(left, right, node)
}