import React from "react"
import Die from "./Die"

function App() {
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const arr = [];
        for(let i=0; i<10; i++) {
            arr.push(Math.ceil(Math.random()*6))
        }

        return arr;
    }

    const diceElements = dice.map(die => {
        return <Die value={die} />
    })

    return (
        <main>
            <div className="container">
                {diceElements}
            </div>
        </main>
    );
}

export default App;