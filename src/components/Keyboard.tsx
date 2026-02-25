import React, { useState } from "react";
import clsx from "clsx";
import Language from "../assets/languages.json";
import StatusBar from "./StatusBar";
import Languages from "./Languages";
import { words } from "../assets/words";
export default function Keyboard() {
  const [guessedWord, setGuessedWord] = useState<string[]>([]);
  function addGuessedWords(letter: string) {
    setGuessedWord((word) => {
      const letterSet = new Set(word);
      letterSet.add(letter);
      return Array.from(letterSet);
    });
  }
  const randomIndex = Math.floor(Math.random() * words.length);
  const languageNames = Language.map((el) => el.name);
  const [currentWord, setCurrentWord] = useState(words[randomIndex]);
  const handleResetGame = () => {
    setCurrentWord(words[randomIndex]);
    setGuessedWord([]);
  };
  const wrongGuessesCount = guessedWord.filter((el) => {
    return !currentWord.includes(el);
  }).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedWord.includes(letter));
  const isGameLost = wrongGuessesCount === Language.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const getWords = currentWord.split("").map((letter, index) => {
    const revealLetters = isGameLost || guessedWord.includes(letter);
    return (

    <span
      key={index}
      className="h-9 w-10 border-b border-b-white border border-[#323232] bg-[#323232] flex justify-center items-center text-[#F9F4DA]  font-bold"
    >
      {revealLetters ? letter.toUpperCase() : ""}
    </span>
  )
});

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
        disabled={isGameOver}
        aria-disabled={guessedWord.includes(letter)}
        className={`${classNames} h-9 w-10 flex justify-center items-center text-black border border-white rounded-sm cursor-pointer bg-[#FCBA29]`}
      >
        {letter.toUpperCase()}
      </button>
    );
  });
  const LastGuessedLetter = guessedWord[guessedWord.length - 1];
  const isLastGussedIncorrect =
    LastGuessedLetter && !currentWord.includes(LastGuessedLetter);
  const combine: boolean = !!(isLastGussedIncorrect && !isGameOver);
  return (
    <>
      <StatusBar
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        languageNames={languageNames}
        combine={combine}
        wrongGuesses={wrongGuessesCount - 1}
      />
      <Languages wrongGuessCount={wrongGuessesCount} />
      <div className="flex gap-0.5 mt-5">{getWords}</div>
      <div className="flex flex-col space-y-4 items-center">
        <div className="w-120 h-33 flex flex-wrap justify-center items-center space-x-2">
          {getKeyboard}
        </div>
        {isGameOver && (
          <button
            onClick={handleResetGame}
            className="w-57 h-10 p-4 bg-[#11B5E5] flex items-center justify-center border border-white rounded-sm cursor-pointer"
          >
            New Game
          </button>
        )}
      </div>
    </>
  );
}
