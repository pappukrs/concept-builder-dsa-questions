function solveNQueens(n) {
    let result = [];

    function backtrack(row, board) {
        if (row === n) {
            result.push(board.map(r => r.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col, n)) {
                board[row][col] = "Q";
                backtrack(row + 1, board);
                board[row][col] = ".";
            }
        }
    }

    function isValid(board, row, col, n) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === "Q") return false;
        }
        return true;
    }

    let board = Array.from({ length: n }, () => Array(n).fill("."));
    backtrack(0, board);

    return result;
}