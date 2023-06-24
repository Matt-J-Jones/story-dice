import React, { useState } from 'react';
import './App.css';
import returnDice from './diceResults';
import GptApp from './gptApp';

const diceFacesOne = ["Kiss", "Flower", "Clock", "Caravan", "Whale", "Drink"]
const resultDiceOne = returnDice(diceFacesOne);
const imgDiceOne = `Dice/1/${resultDiceOne}.png`;

const diceFacesTwo = ["Burger", "Explosion", "Hat", "Car", "Ladder", "Tree"]
const resultDiceTwo = returnDice(diceFacesTwo);
const imgDiceTwo = `Dice/2/${resultDiceTwo}.png`;

const diceFacesThree = ["Rain", "Sun", "Love", "Football", "Glasses"]
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

  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);
  const gpt = new GptApp();

  const generateStory = async () => {
    const textToSend = `Generate a short, 100 word story using the following items: 
      ${resultDiceOne}, ${resultDiceTwo}, ${resultDiceThree}, ${resultDiceFour}, ${resultDiceFive}, ${resultDiceSix}`;

    setLoading(true); 

    try {
      const response = await gpt.chat(textToSend);
      console.log(response);
      setGeneratedText(response);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
      <h2>Storyteller Dice</h2>
        
        <div className="DiceContainer">
          <img src={imgDiceOne} alt={resultDiceOne} className="Dice"/>
          <img src={imgDiceTwo} alt={resultDiceTwo} className="Dice"/>
          <img src={imgDiceThree} alt={resultDiceThree} className="Dice"/>
          <img src={imgDiceFour} alt={resultDiceFour} className="Dice"/>
          <img src={imgDiceFive} alt={resultDiceFive} className="Dice"/>
          <img src={imgDiceSix} alt={resultDiceSix} className="Dice"/>
        </div>
        <div className='buttonContainer'>
        <button onClick={reloadPage} className='button'>Reroll</button>
        <button onClick={generateStory} className='button'>Generate Story</button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          generatedText && <div className="storyContainer"><p>{generatedText}</p></div>
        )}
      </header>
    </div>
  );
}

export default App;
