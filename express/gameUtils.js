// Board has a few states
// 0 = empty
// 1 = black
// 2 = white
// 3 = captured
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

    isCaptured(color) {
        let rowColLength = this.board.length
        let colorNum = color === 'black' ? 1 : 2
        for (let row = 0; row < rowColLength; row++) {
            for (let col = 0; col < rowColLength; col++) {
                // Checking corners
                if (row === 0 && col === 0) {
                    if (this.board[row+1][col] > 0 && this.board[row][col+1] > 0) {
                        if (this.board[row+1][col] === this.board[row][col+1]) {
                            this.board[row][col] = colorNum === this.board[row][col+1] ? colorNum : 3
                        }
                    }
                }

                if (row === 0 && col === rowColLength) {
                    if (this.board[row+1][col] > 0 && this.board[row][col-1] > 0) {
                        if (this.board[row+1][col] === this.board[row][col-1]) {
                            this.board[row][col] = 3
                        }
                    }
                }
                if (row === rowColLength && col === 0) {
                    if (this.board[row-1][col] > 0 && this.board[row][col+1] > 0) {
                        if (this.board[row-1][col] === this.board[row][col+1]) {
                            this.board[row][col] = 3
                        }
                    }
                }

            }
        }
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