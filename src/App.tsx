import { useEffect, useState } from 'react';
import './App.css';
import { BoardComponent } from './components/BoardComponent';
import { Board } from './modules/Board';

const initialBoard = new Board()


export const App: React.FC = () => {

  const [ board, setBoard] = useState(initialBoard)

    useEffect(() => {
        restart()
    }, [])

    const restart = () => {
        const newBoard = new Board()
        newBoard.initCells()
        newBoard.addFigure()
        setBoard(newBoard)
    }

  return (
    <div className="app">
      <BoardComponent 
        board={board} 
        setBoard={setBoard}
      />
    </div>
  );
}


