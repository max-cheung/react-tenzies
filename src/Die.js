import React from "react"

function Die(props) {
    const styles = {
        background : props.isHeld ? "rgba(89, 227, 145, 1)" : "rgba(255, 255, 255, 1)"
    }
    return(
        <div className="die" style={styles} onClick={()=> props.holdDice(props.id)}>
            {props.value}
        </div>
    )
}

export default Die