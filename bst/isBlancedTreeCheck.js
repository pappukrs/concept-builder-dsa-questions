function isBalanced(root) {

    function dfs(node) {

        if (!node) return { balanced: true, height: 0 }

        let left = dfs(node.left)
        let right = dfs(node.right)

        let balanced =
            left.balanced &&
            right.balanced &&
            Math.abs(left.height - right.height) <= 1

        let height = 1 + Math.max(left.height, right.height)

        return { balanced, height }
    }

    return dfs(root).balanced
}