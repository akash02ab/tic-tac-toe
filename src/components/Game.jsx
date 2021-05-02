import { useState } from 'react';
import Board from './Board';
import gameStatus from '../helper';

export default function Game() {
    let [isXsTurn, setIsXsTurn] = useState(true);
    let [current, setCurrent] = useState(0);
    let [history, setHistory] = useState([Array(9).fill(null)]);
    let status = gameStatus(history[current]);

    function timeTravel(index) {
        const historyCopy = [...history];
        historyCopy.splice(index + 1);
        setHistory(historyCopy);
        setCurrent(index);
        setIsXsTurn(index % 2 === 0);
    }
    
    function addTimeline() {
        return history.map((_state, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to game start.';
            return (
                <div className="timeline" key={move}>
                    <div className="index">{move}.</div>
                    <button onClick={() => timeTravel(move)}>{destination}</button>
                </div>
            );
        });
    }

    function updateBoard(index) {
        const timeInHistory = [...history];
        const currentTimeInHistory = timeInHistory[current];
        const squares = [...currentTimeInHistory];

        if(status || squares[index]) return;

        squares[index] = isXsTurn ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setCurrent(timeInHistory.length);
        setIsXsTurn(!isXsTurn);
    }

    return (
        <div className="play-area">
            <Board 
                squares={history[current]} 
                clickHandler={updateBoard}
                msg={status ? status : isXsTurn ? 'X\'s Turn' : 'O\'s Turn'}
            />
            <div className="history">{addTimeline()}</div>
        </div>
    );
}