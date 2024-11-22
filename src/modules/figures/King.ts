import { Figure, FigureNames } from "./Figure";

import { Colors } from "../Colors";
import { Cell } from "../Cell";

import blackLogo from './../../assets/black-king.png'
import whiteLogo from './../../assets/white-king.png'

export class King extends Figure {
    selectLogo: typeof blackLogo
    constructor (color: Colors, cell: Cell) {
        super(color, cell)
        this.selectLogo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.logo = this.selectLogo;
        this.name = FigureNames.KING;
    }

    canMove (target: Cell): boolean {
        if(!super.canMove(target)) {
            return false
        }  
        const deltaX = Math.abs(this.cell.x - target.x);
        const deltaY = Math.abs(this.cell.y - target.y);
        return deltaX <= 1 && deltaY <= 1;
    }
}