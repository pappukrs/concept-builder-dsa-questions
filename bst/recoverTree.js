function recoverTree(root) {

    let first = null
    let second = null
    let prev = null

    let current = root

    while (current) {

        // Case 1: No left child
        if (!current.left) {

            // detect violation
            if (prev && prev.val > current.val) {

                if (!first) {
                    first = prev
                }

                second = current
            }

            prev = current
            current = current.right
        }

        else {

            // Find predecessor
            let pred = current.left

            while (pred.right && pred.right !== current) {
                pred = pred.right
            }

            // Create thread
            if (!pred.right) {
                pred.right = current
                current = current.left
            }

            // Remove thread
            else {

                pred.right = null

                // detect violation
                if (prev && prev.val > current.val) {

                    if (!first) {
                        first = prev
                    }

                    second = current
                }

                prev = current
                current = current.right
            }
        }
    }

    // swap values
    let temp = first.val
    first.val = second.val
    second.val = temp
}