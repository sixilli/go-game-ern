// Board has a few states
// 0 = empty
// 1 = black
// 2 = white
// -1 = captured / deadzones
class Board {
    constructor(size) {
        this.board = this.makeBoard(size)
        this.history = []
    }

    makeBoard(size) {
        let board = new Array(size)

        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(size)
            board[i].fill(0)
        }
        return board
    }

    updateBoard(loc, color) {
        this.board[loc] = color === 'black' ? 1 : 2
        this.history = this.history.push(loc)
        return this.board
    }

    isValidMove(loc, color) {
        return this.board[loc] === 0 ? true : false
    }

    checkCaptures() {
        let rowColLength = this.board.length
        for (let row = 0; row < rowColLength; row++) {
            for (let col = 0; col < rowColLength; col++) {
            }
        }
    }

    hasLiberties(row, col, visited, rowColLength, color) {
        if (row >= rowColLength || col >= rowColLength) {
            return
        }

        if (row < 0 || col < 0) {
            return
        }

        if (this.board[row][col] !== 0) {
            return false
        }

        if (visited === true) {
            return
        }

        visited[row][col] = true
        this.checkLiberties(row+1, col, visited, rowColLength, color)
        this.checkLiberties(row, col+1, visited, rowColLength, color)
        this.checkLiberties(row-1, col, visited, rowColLength, color)
        this.checkLiberties(row, col-1, visited, rowColLength, color)
        return false
    }

    get getBoard() {
        return this.board
    }
}

const checkMove = (col, row, board) => {
    if (board[row][col] === 0) {
        return true
    } else {
        return false
    }
}

export { Board, checkMove }