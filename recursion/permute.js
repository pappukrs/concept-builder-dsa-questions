function permute(nums) {
    let result = [];

    function backtrack(path, remaining) {
        if (remaining.length === 0) {
            result.push(path);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            backtrack(
                [...path, remaining[i]],
                [...remaining.slice(0, i), ...remaining.slice(i + 1)]
            );
        }
    }

    backtrack([], nums);
    return result;
}

console.log(permute([1, 2, 3]));