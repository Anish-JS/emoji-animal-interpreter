import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "\ud83d\ude48": "See-No-Evil Monkey",
  "\ud83d\ude49": "Hear-No-Evil Monkey",
  "\ud83d\ude4a": "Speak-No-Evil Monkey",
  "\ud83d\udca5": "Collision",
  "\ud83d\udc35": "Monkey Face",
  "\ud83d\udc12": "Monkey",
  "\ud83e\udd8d": "Gorilla",
  "\ud83e\udda7": "Orangutan",
  "\ud83d\udc36": "Dog Face",
  "\ud83d\udc15": "Dog",
  "\ud83e\uddae": "Guide Dog",
  "\ud83d\udc15\u200d\ud83e\uddba": "Service Dog",
  "\ud83d\udc29": "Poodle",
  "\ud83d\udc3a": "Wolf",
  "\ud83e\udd8a": "Fox",
  "\ud83e\udd9d": "Raccoon",
  "\ud83d\udc31": "Cat Face",
  "\ud83d\udc08": "Cat",
  "\ud83e\udd81": "Lion",
  "\ud83d\udc2f": "Tiger Face",
  "\ud83d\udc05": "Tiger",
  "\ud83d\udc06": "Leopard",
  "\ud83d\udc34": "Horse Face",
  "\ud83d\udc0e": "Horse",
  "\ud83e\udd84": "Unicorn"
};

var animalEmoji = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function EmojiInputHandler(event) {
    var userInput = event.target.value;
    if (userInput in emojiDictionary) setMeaning(emojiDictionary[userInput]);
    else setMeaning("Not in DB");
  }

  function emojiClickHandler(item) {
    setMeaning(emojiDictionary[item]);
  }
  return (
    <div className="App">
      <h1>Emoji Animal Interpreter</h1>
      <input onChange={EmojiInputHandler}></input>
      <div style={{ margin: "1rem", fontWeight: "bolder", fontSize: "1.5rem" }}>
        {meaning}
      </div>
      <h2>Emojis We know</h2>
      <div>
        {animalEmoji.map((item) => {
          return (
            <span
              onClick={() => emojiClickHandler(item)}
              style={{
                margin: "0.5rem",
                padding: "0.5rem 0.5rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
