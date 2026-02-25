import getFarewellText from "../assets/utils";
export default function StatusBar({
  isGameWon,
  isGameLost,
  languageNames,
  combine,
  wrongGuesses
}: {
  isGameWon: boolean;
  isGameLost: boolean;
  languageNames: string[];
  combine : boolean,
  wrongGuesses : number

}) {
  const all = !combine && !isGameWon && !isGameLost;
  return (
    <>
      {all
         && 
        <button className="w-90 h-15 p-6 bg-gray-600 border border-dashed border-[#403354] flex flex-col items-center justify-center text-white rounded-sm flex-wrap">
          <h1 className="font-bold">
            Choose the letters to continue the Assembly
          </h1>
        </button>
      }
      {combine && (
        <button className="w-90 h-15 p-6 bg-[#7A5EA7] border border-dashed border-[#403354] flex flex-col items-center justify-center text-white rounded-sm flex-wrap">
          <h1 className="font-bold">
            {getFarewellText(languageNames[wrongGuesses])}
          </h1>
        </button>
      )}
      {isGameWon && (
        <button className="w-90 h-15 p-6 bg-[#10A95B] flex flex-col items-center justify-center text-white rounded-sm">
          <h1 className="font-bold">You win!</h1>
          <span className="font-medium">Well done! 🎉</span>
        </button>
      )}
      {isGameLost && (
        <button className="w-90 h-15 p-6 bg-[#BA2A2A] flex flex-col items-center justify-center text-white rounded-sm">
          <h1 className="font-bold">Game Over!</h1>
          <span className="font-medium">
            You lose! Better start learning Assembly 😭
          </span>
        </button>
      )}
    </>
  );
}
