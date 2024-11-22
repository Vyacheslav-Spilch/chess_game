import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from './../../assets/black-bishop.png'
import whiteLogo from './../../assets/white-bishop.png'

export class Bishop extends Figure {
    selectLogo: typeof blackLogo
    constructor (color: Colors, cell: Cell) {
        super(color, cell)
        this.selectLogo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.logo = this.selectLogo;
        this.name = FigureNames.BISHOP;
    }

    canMove (target: Cell): boolean {
        if(!super.canMove(target)) {
            return false
        }  if(this.cell.isEmptyDiagonal(target)) {
            return true
        } else {
            return false
        }
    }
}