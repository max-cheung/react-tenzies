import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

function App() {
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(function() {
        const firstDieNum = dice[0].value;
        const allIsHeld = dice.every(die => die.isHeld);
        const allSameNum = dice.every(die => die.value === firstDieNum);

        if(allIsHeld && allSameNum) {
            setTenzies(true);
        }

    },[dice])

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
        if(tenzies) {
            setDice(allNewDice());
            setTenzies(false);
        }
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die : {
                ...die,
                value: Math.ceil(Math.random()*6)
            }
        }));
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            if(die.id===id) {
                return ({
                    ...die,
                    isHeld: !die.isHeld
                })
            } else {
                return die;
            }
        }))
    }

    const diceElements = dice.map(die => {
        return <Die key={die.id} isHeld={die.isHeld} value={die.value} holdDice={holdDice} id={die.id}/>
    })

    return (
        <main>
            {tenzies && <Confetti />}
            <div className="game-container">
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="container">
                    {diceElements}
                </div>
                <button onClick={rollDice} className="roll-dice">{tenzies ? "New Game" : "Roll"}</button>
            </div>
        </main>
    );
}

export default App;