function rob(nums) {
    let prev = 0
    let curr = 0

    for (let num of nums) {
        let temp = Math.max(curr, prev + num)
        prev = curr
        curr = temp
    }

    return curr
}