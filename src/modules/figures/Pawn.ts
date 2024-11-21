import { Figure, FigureNames } from "./Figure";

import { Colors } from "../Colors";
import { Cell } from "../Cell";

import blackLogo from '../../../assets/black-pawn.png'
import whiteLogo from '../../../assets/white-pawn.png'

export class Pawn extends Figure {
    selectLogo: typeof blackLogo
    constructor (color: Colors, cell: Cell) {
        super(color, cell)
        this.selectLogo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.logo = this.selectLogo;
        this.name = FigureNames.PAWN;

    }
}