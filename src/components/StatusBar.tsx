export default function StatusBar({
  isGameWon,
  isGameLost,
  languageNames,
}: {
  isGameWon: boolean;
  isGameLost: boolean;
  languageNames: string[];
}) {
  return (
    <>
      {languageNames.length >= 1 && (
        <button className="w-90 h-15 p-6 bg-[#7A5EA7] border border-dashed border-[#403354] flex flex-col items-center justify-center text-white rounded-sm">
          <h1 className="font-bold">“Farewell {languageNames.join(" &   ")}🫡”</h1>
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
