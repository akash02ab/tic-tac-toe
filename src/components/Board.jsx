import Square from "./Square";

export default function Board({squares, clickHandler, msg}) {
	return (
        <div className="board-container">  
            <h1>{msg}</h1>

            <div className="board">
                {squares.map((square, index) => (
                    <Square 
                        key={index} 
                        value={square} 
                        index={index}
                        clickHandler={clickHandler}
                    />)
                )}
            </div>
        </div>
	);
}