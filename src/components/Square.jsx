export default function Square({index, value, clickHandler}) {
    return (
        <button className="square" onClick={() => clickHandler(index)}>{value}</button>
    );
}