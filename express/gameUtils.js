class Board {
    constructor(size) {
        this.board = this.makeBoard(size)
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
        return this.board
    }

    isValidMove(loc, color) {
        return this.board[loc] === 0 ? true : false
    }

    get getBoard() {
        return this.board
    }
}

module.exports = Board