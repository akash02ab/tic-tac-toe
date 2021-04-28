import Square from "./Square";
import {useState} from 'react'; 

function Board(props) {
    let [squares, setSquare] = useState(new Array(9).fill(' '));
    let [turn, setTurn] = useState('O');
    let [msg, setMsg] = useState('X\'s Turn' );

    function toggle(index) {
        let value = [...squares];

        if(value[index] === ' ' && turn === 'O') {
            value[index] = 'X';
            setSquare(value);
            setTurn('X');
            setMsg('O\'s Turn');
        }
        else if(value[index] === ' ' && turn === 'X') {
            value[index] = 'O';
            setSquare(value);
            setTurn('O');
            setMsg('X\'s Turn');
        }

        gameStatus(value);
    }

    function gameStatus(squares) {
        let stepRemaining = squares.includes(' ');

        if(!stepRemaining) {
            setMsg('Draw');
            return;
        }
        
        let leftdiag = '', rigdiag = '';
        
        for(let i=0; i<3; i++) {
            let row = '', col = '';

            for(let j=0; j<3; j++) {
                row += squares[i * 3 + j];
                col += squares[i + j * 3];

                if(i === j) {
                    rigdiag += squares[i * 3 + j];
                }

                if(i + j === 2) {
                    leftdiag += squares[i * 3 + j];
                }
            }

            if(row === 'XXX' || col === 'XXX' || rigdiag === 'XXX' || leftdiag === 'XXX') {
                setMsg('X Won');
                return;
            }

            if(row === 'OOO' || col === 'OOO' || rigdiag === 'OOO' || leftdiag === 'OOO') {
                setMsg('O Won');
                return;
            }
        }
    }

    let board = [];

    for(let index=0; index<9; index++) {
        board.push(<Square key={index} value={squares[index]} clickHandler={toggle} index={index} status={gameStatus} className="box"/>); 
    }

	return (
        <div className="board-container">  
            <h1>{msg}</h1>

            <div className="board">
                {board}
            </div>
        </div>
	);
}

export default Board;