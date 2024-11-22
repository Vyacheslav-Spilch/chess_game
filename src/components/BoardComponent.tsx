import React, { FC, useEffect, useState } from 'react'
import { Board } from '../modules/Board'
import { Cell } from '../modules/Cell';
import './../App.css'
import { CellComponent } from './CellComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

export const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)


    useEffect(() => {
        highLightCells()
    }, [selectedCell])

    function handleSelected (cell: Cell) {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
            updateBoard()
        } else {
            setSelectedCell(cell)
        }
    }

    function highLightCells () {
        board.highLightCells(selectedCell)
        updateBoard()
    }


    function updateBoard () {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className="board">
            {board.cells.map((row, index) => (
                <React.Fragment key={index}>
                    {row.map(cell => (
                        <CellComponent 
                            key={cell.id} 
                            cell={cell}
                            selectedCell={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            handleSelected={handleSelected}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

