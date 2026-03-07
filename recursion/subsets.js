function subsets(nums) {
    let result = [];

    function dfs(index, current) {
        if (index === nums.length) {
            result.push([...current]);
            return;
        }

        // include element
        current.push(nums[index]);
        dfs(index + 1, current);

        // exclude element
        current.pop();
        dfs(index + 1, current);
    }

    dfs(0, []);
    return result;
}

console.log(subsets([1, 2]));