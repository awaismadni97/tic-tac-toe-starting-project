export default function Log({ turns, gamePlayer }) {
    return <ol id="log">
        {turns.map((turn) => (
            <li key={`${turn.square.row}${turn.square.col}`}>
                {gamePlayer[turn.player]} selected {turn.square.row}, {turn.square.col}
            </li>
        ))}
    </ol>
}