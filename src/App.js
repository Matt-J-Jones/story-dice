import React, { useState } from 'react';
import './App.css';
import returnDice from './diceResults';

const diceFacesOne = ["Kiss", "Flower", "Clock", "Caravan", "Whale", "Drink"]
const resultDiceOne = returnDice(diceFacesOne);
const imgDiceOne = `Dice/1/${resultDiceOne}.png`;

const diceFacesTwo = ["Burger", "Explosion", "Hat", "Car", "Ladder", "Tree"]
const resultDiceTwo = returnDice(diceFacesTwo);
const imgDiceTwo = `Dice/2/${resultDiceTwo}.png`;

const diceFacesThree = ["Rain", "Poo", "Sun", "Love", "Football", "Glasses"]
const resultDiceThree = returnDice(diceFacesThree);
const imgDiceThree = `Dice/3/${resultDiceThree}.png`;

const diceFacesFour = ["Coffee", "Letter", "Bus", "Dinner", "Smiling", "Paws"]
const resultDiceFour = returnDice(diceFacesFour);
const imgDiceFour = `Dice/4/${resultDiceFour}.png`;

const diceFacesFive = ["Sad", "Bike", "Bird", "Satchel", "Angry", "Night"]
const resultDiceFive = returnDice(diceFacesFive);
const imgDiceFive = `Dice/5/${resultDiceFive}.png`;

const diceFacesSix = ["IceCream", "Cat", "Banana", "Balloon", "Pencil", "Telephone"]
const resultDiceSix = returnDice(diceFacesSix);
const imgDiceSix = `Dice/6/${resultDiceSix}.png`;


function App() {

  const reloadPage = () => {
    window.location.reload();
  };

  const [showStory, setShowStory] = useState(false);

  const generateStory = () => {
    setShowStory(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={reloadPage}>Reroll</button>

        <div class="DiceContainer">
          <img src={imgDiceOne} alt={resultDiceOne} class="Dice"/>
          <img src={imgDiceTwo} alt={resultDiceTwo} class="Dice"/>
          <img src={imgDiceThree} alt={resultDiceThree} class="Dice"/>
          <img src={imgDiceFour} alt={resultDiceFour} class="Dice"/>
          <img src={imgDiceFive} alt={resultDiceFive} class="Dice"/>
          <img src={imgDiceSix} alt={resultDiceSix} class="Dice"/>
        </div>

        <button onClick={generateStory}>Generate Story</button>
        {showStory && (
          <p>
            Generate a short, 100-word story using the following items: 
            {resultDiceOne}, {resultDiceTwo}, {resultDiceThree}, {resultDiceFour}, {resultDiceFive}, {resultDiceSix}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
