import React, { useState } from "react";
import clsx from "clsx";
import Language from "../assets/languages.json";
import StatusBar from "./StatusBar";

export default function Keyboard() {
  const [guessedWord, setGuessedWord] = useState<string[]>([]);
  function addGuessedWords(letter: string) {
    setGuessedWord((word) => {
      const letterSet = new Set(word);
      letterSet.add(letter);
      return Array.from(letterSet);
    });
  }
  const [currentWord, setCurrentWord] = useState("react");
  const getWords = currentWord.split("").map((letter, index) => (
    <span
      key={index}
      className="h-9 w-10 border-b border-b-white border border-[#323232] bg-[#323232] flex justify-center items-center text-[#F9F4DA]  font-bold"
    >
      {guessedWord.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ));
  const wrongGuessesCount = guessedWord.filter((el) => {
    return !currentWord.includes(el);
  }).length;
  let getTheNames : string[] = [];
  const languages = Language.map((el, index) => {
    const isLanguageLost = index < wrongGuessesCount;
    if(isLanguageLost){
      getTheNames.push(el.name);
    }
    const classNames = clsx("chip", isLanguageLost && "lost");
    return (
      <li
        key={index}
        style={{ backgroundColor: el.backgroundColor, color: el.color }}
        className={`${classNames} p-1 flex justify-center font-bold rounded-sm`}
      >
        {el.name}
      </li>
    );
  });
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedWord.includes(letter));
  const isGameLost = wrongGuessesCount === languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const getKeyboard = alphabets.split("").map((letter, index) => {
    const isGuessed = guessedWord.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const classNames = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        style={{ backgroundColor: classNames }}
        key={index}
        value={letter}
        onClick={() => addGuessedWords(letter)}
        className={`${classNames} h-9 w-10 flex justify-center items-center text-black border border-white rounded-sm cursor-pointer bg-[#FCBA29]`}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <>
      <StatusBar isGameWon={isGameWon} isGameLost={isGameLost} languageNames={getTheNames}/>
      <div className="w-90.25 h-12.75">
        <ul className="flex justify-center items-center flex-row gap-1 flex-wrap">
          {languages}
        </ul>
      </div>
      <div className="flex gap-0.5 mt-5">{getWords}</div>
      <div className="flex flex-col space-y-4 items-center">
        <div className="w-120 h-33 flex flex-wrap justify-center items-center space-x-2">
          {getKeyboard}
        </div>
        {isGameOver && (
          <button className="w-57 h-10 p-4 bg-[#11B5E5] flex items-center justify-center border border-white rounded-sm cursor-pointer">
            New Game
          </button>
        )}
      </div>
    </>
  );
}
