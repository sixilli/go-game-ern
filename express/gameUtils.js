// Board has a few states
// 0 = empty
// 1 = black
// 2 = white
// -1 = captured / deadzones
class Board {
    constructor(size) {
        this.board = this.makeTestBoard()
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
        this.board[loc[0]][loc[1]] = color === 'black' ? 1 : 2
        this.history = this.history.push(loc)
        this.checkCaptures()
        return this.board
    }

    isValidMove(loc) {
        return this.board[loc[0]][loc[1]] === 0 ? true : false
    }

    // High level function responsible for finding captured stones
    checkCaptures() {
        let rowColLength = this.board.length
        // Mock board to speed up recursive function
        let visited = new Array(rowColLength)
        let result = true

        // Possibly extract visited array related logic to new file
        for (let i = 0; i < rowColLength; i++) {
            visited[i] = new Array(rowColLength)
            visited[i].fill(false)
        }

        for (let row = 0; row < rowColLength; row++) {
            for (let col = 0; col < rowColLength; col++) {
                if (this.board[row][col] > 0) {
                    if (visited[row][col] === false) {
                        // Temp array to hold groups of stones
                        let group = []
                        result = this.hasLiberties(row, col, visited, group, rowColLength, this.board[row][col])

                        // If there is no liberties update board accordingly
                        if (result === false) {
                            console.log(`[${row}, ${col}]: Group has no liberties. ${group}`)
                            for (let i = 0; i < group.length; i++) {
                                this.board[group[i][0]][group[i][1]] = -1
                            }
                        }
                    }
                }
            }
        }
    }

    hasLiberties(row, col, visited, group, rowColLength, color) {
        if (row >= rowColLength || col >= rowColLength) {
            return
        }

        if (row < 0 || col < 0) {
            return
        }

        if (visited[row][col] === true) {
            return
        }

        if (this.board[row][col] === color) {
            group.push([row, col])
        }

        if (this.board[row][col] === 0) {
            return true
        }

        if (this.board[row][col] !== color) {
            return
        }

        visited[row][col] = true
        if (this.hasLiberties(row+1, col, visited, group, rowColLength, color) === true) return true
        if (this.hasLiberties(row, col+1, visited, group, rowColLength, color) === true) return true
        if (this.hasLiberties(row-1, col, visited, group, rowColLength, color) === true) return true
        if (this.hasLiberties(row, col-1, visited, group, rowColLength, color) === true) return true
        return false
    }

    makeTestBoard() {
        let board = [
            [2, 1, 0, 0, 0, 0, 0, 1, 2],
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [0, 0, 0, 1, 2, 1, 0, 0, 0],
            [1, 0, 0, 1, 2, 2, 1, 0, 0],
            [2, 1, 0, 0, 1, 1, 0, 0, 0],
            [2, 1, 0, 1, 1, 1, 0, 0, 0],
            [1, 0, 1, 2, 2, 2, 1, 0, 0],
            [1, 0, 0, 1, 1, 1, 0, 0, 1],
            [2, 1, 0, 0, 0, 0, 0, 1, 2],
        ]

        return board
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

module.exports.Board = Board
exports.checkMove = checkMove