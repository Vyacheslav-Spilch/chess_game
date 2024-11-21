import { Figure, FigureNames } from "./Figure";

import { Colors } from "../Colors";
import { Cell } from "../Cell";

import blackLogo from '../../../assets/black-king.png'
import whiteLogo from '../../../assets/white-king.png'

export class King extends Figure {
    selectLogo: typeof blackLogo
    constructor (color: Colors, cell: Cell) {
        super(color, cell)
        this.selectLogo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.logo = this.selectLogo;
        this.name = FigureNames.KING;

    }
}