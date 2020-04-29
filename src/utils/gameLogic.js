const checkMove = (col, row, board) => {
    if (board[row][col] === 0) {
        return true
    } else {
        return false
    }
}

export default checkMove