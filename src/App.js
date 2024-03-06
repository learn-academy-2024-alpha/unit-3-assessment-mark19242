import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) The draw variable generates a random card
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2)This is a conditon that checks the draw variable. I vaguley understand that the === -1 is checking to if a specific card is in the array. And, if this condition is met.
    if (hand.indexOf(draw) === -1) {
      // 3)This will change the hand and add a new car to it.
      setHand([...hand, draw])
      // 4) This condition checks to if there is not 52 cards. And, if this condition is met.
    } else if (hand.length !== 52) {
      // 5)The draw card function is called and this will randomize the cards again so there won't be a repeat of a card.
      drawCard()
      // 6)This else is basically a catch all if the above conditions are not met.
    } else {
      // 7) This just alerts that all cards have been delt.
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    window.location.reload();
  }

  return (
    <>
    <h1>LEARN CARDS</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
  </>
  )
}

export default App
