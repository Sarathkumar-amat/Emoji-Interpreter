import React, { useState } from "react";
import "./styles.css";

//var name = prompt("Give me your name");
var emojiDictionary = {
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🤓": "Nerd Face",
  "💀": "Skull",
  "😑": "annoyance",
};
var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [meaning, setMeaning] = useState("meaning comes here..");
  function clickViewHandler(emoji) {
    const emojiVal = emoji;
    setMeaning(emojiDictionary[emojiVal]);
  }
  function View(event) {
    const inpEmoji = event.target.value;
    setUserInput(inpEmoji);
    if (inpEmoji in emojiList) {
      setMeaning(emojiDictionary[inpEmoji]);
    } else {
      setMeaning("couldn't find that");
    }
  }
  return (
    <div className="App">
      <h1>Know your emoji here...</h1>
      <input
        onChange={View}
        value={userInput}
        style={{ padding: "1em", minWidth: "80%" }}
        placeholder={"enter you emoji here"}
      />
      <h2>{userInput}</h2>
      <h2>{meaning}</h2>
      {emojiList.map((emoji) => (
        <span
          onClick={() => clickViewHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
//var txtValue = txtInp.value;
