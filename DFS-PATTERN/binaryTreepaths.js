function binaryTreePaths(root) {

    let result = []

    function dfs(node, path) {

        if (!node) return

        path.push(node.val)

        if (!node.left && !node.right) {
            result.push(path.join("->"))
        }

        dfs(node.left, path)
        dfs(node.right, path)

        path.pop()
    }

    dfs(root, [])
    return result
}