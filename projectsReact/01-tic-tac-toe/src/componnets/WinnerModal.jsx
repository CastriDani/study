import { Square } from "./Square"
export function WinnerModal ({winner, resetGame}) {

    if (winner === null) return null

    const winnerText = winner === false ? 'Tie' : 'Winner: '
    return (
        
      <section className="winner">
        <div className="text">
          <h2>{ winnerText }</h2>

          <header className="win">
            {winner && <Square>{winner}</Square>}
          </header>

          <footer className="">
            <button onClick={resetGame}>Start again</button>
          </footer>

        </div>
      </section>
      
    )
}