import React, { useState } from "react";

export default function Keyboard() {
  const [guessedWord, setGuessedWord] = useState<string[]>([]);
  function addGuessedWords(letter: string) {
    setGuessedWord((word) => {
      const letterSet = new Set(word);
      letterSet.add(letter);
      return Array.from(letterSet);
    });
  }
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const getKeyboard = alphabets.split("").map((letter, index) => (
    <button
      key={index}
      value={letter}
      onClick={() => addGuessedWords(letter)}
      className="h-9 w-10 flex justify-center items-center text-black border border-white rounded-sm bg-[#FCBA29] cursor-pointer"
    >
      {letter.toUpperCase()}
    </button>
  ));
  const [word, setWord] = useState("react");
  const getWords = word.split("").map((el, index) => (
    <span
      key={index}
      className="h-9 w-10 border-b border-b-white border border-[#323232] bg-[#323232] flex justify-center items-center text-[#F9F4DA]  font-bold"
    >
      {el.toUpperCase()}
    </span>
  ));
  return (
    <>
      <div className="flex gap-0.5 mt-5">{getWords}</div>
      <div className="flex flex-col space-y-4 items-center">
        <div className="w-120 h-33 flex flex-wrap justify-center items-center space-x-2">
          {getKeyboard}
        </div>
        <button className="w-57 h-10 p-4 bg-[#11B5E5] flex items-center justify-center border border-white rounded-sm cursor-pointer">
          New Game
        </button>
      </div>
    </>
  );
}
