function morrisInorder(root) {

    let result = []
    let current = root

    while (current) {

        // Case 1: No left child
        if (!current.left) {
            result.push(current.val)
            current = current.right
        }

        else {

            // Find predecessor
            let pred = current.left

            while (pred.right && pred.right !== current) {
                pred = pred.right
            }

            // Case 2a: Create thread
            if (!pred.right) {
                pred.right = current
                current = current.left
            }

            // Case 2b: Remove thread
            else {
                pred.right = null
                result.push(current.val)
                current = current.right
            }
        }
    }

    return result
}