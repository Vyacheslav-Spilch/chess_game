import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from './../../assets/black-queen.png'
import whiteLogo from './../../assets/white-queen.png'

export class Queen extends Figure {
    selectLogo: typeof blackLogo
    constructor (color: Colors, cell: Cell) {
        super(color, cell)
        this.selectLogo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.logo = this.selectLogo;
        this.name = FigureNames.QUEEN;
    }

    canMove (target: Cell): boolean {
        if(!super.canMove(target)) {
            return false
        }  if(this.cell.isEmptyVertical(target)) {
            return true
        } if(this.cell.isEmptyHorizontal(target)) {
            return true
        } if(this.cell.isEmptyDiagonal(target)) {
            return true
        } else {
            return false
        }
        
    }
}