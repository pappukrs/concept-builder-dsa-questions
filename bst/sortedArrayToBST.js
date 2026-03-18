function sortedArrayToBST(nums) {

    function build(l, r) {

        if (l > r) return null

        let mid = Math.floor((l + r) / 2)

        return {
            val: nums[mid],
            left: build(l, mid - 1),
            right: build(mid + 1, r)
        }
    }

    return build(0, nums.length - 1)
}