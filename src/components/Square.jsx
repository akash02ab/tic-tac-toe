function Square(props) {
    return (
        <button className="square" onClick={() => props.clickHandler(props.index)}>{props.value}</button>
    );
}

export default Square;