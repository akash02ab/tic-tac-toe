export default function gameStatus(squares) {
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
            return 'X Won';
        }

        if(row === 'OOO' || col === 'OOO' || rigdiag === 'OOO' || leftdiag === 'OOO') {
            return 'O Won';
        }
    }
    if(!squares.includes(null)) return 'Draw';
    return null;
}