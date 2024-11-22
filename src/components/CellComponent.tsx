import { FC } from 'react'
import { Cell } from '../modules/Cell'
import './../App.css'


interface CellProps {
    cell: Cell
    selectedCell: boolean
    handleSelected: (cell: Cell) => void 
}

export const CellComponent: FC<CellProps> = ({ cell, selectedCell, handleSelected }) => {
    return (
        <div 
            className={['cell', cell.color, selectedCell ? 'selected' : ''].join(' ')}
            onClick={() => handleSelected(cell)}
            style={{background: cell.figure && cell.available ? 'green' : ''}}
        >
            {!cell.figure && cell.available && <div className='available'></div>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
        </div>
    )
}

