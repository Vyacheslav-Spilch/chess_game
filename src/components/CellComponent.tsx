import { FC } from 'react'
import { Cell } from '../modules/Cell'
import './../App.css'


interface CellProps {
    cell: Cell
}

export const CellComponent: FC<CellProps> = ({ cell }) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
        </div>
    )
}

