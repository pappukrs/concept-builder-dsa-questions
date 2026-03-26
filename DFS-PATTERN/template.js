function dfs(node, state) {

    if (!node) return

    // update state
    state = update(state, node)

    dfs(node.left, state)
    dfs(node.right, state)
}