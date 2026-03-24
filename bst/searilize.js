function serialize(root) {

    let result = []

    function dfs(node) {
        if (!node) {
            result.push("null")
            return
        }

        result.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    return result.join(",")
}