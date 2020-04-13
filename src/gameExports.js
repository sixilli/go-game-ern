export const createBoard = (boardSize) => (
    Array.from(Array(boardSize), () => 
        new Array(boardSize).fill([0, 'empty'])
    )
)

export default createBoard;