import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

function App() {
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const arr = [];
        for(let i=0; i<10; i++) {
            const num = Math.ceil(Math.random()*6);
            arr.push({
                id: nanoid(),
                value: num,
                isHeld: false
            })
        }

        return arr;
    }

    function rollDice() {
        setDice(allNewDice);
    }

    const diceElements = dice.map(die => {
        return <Die key={die.id} value={die.value} />
    })

    console.log(dice);

    return (
        <main>
            <div className="container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="roll-dice">Roll</button>
        </main>
    );
}

export default App;