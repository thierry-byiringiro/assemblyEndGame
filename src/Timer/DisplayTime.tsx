export default function DisplayTime({ elapsedTime }: { elapsedTime: number }) {
  const isFinished = elapsedTime === 0;
  let minutes : number | string = Math.floor(elapsedTime / 60000);
  let seconds : number | string = Math.floor((elapsedTime % 60000) / 1000);
  let milliseconds : number | string = Math.floor((elapsedTime % 1000) / 10);
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");
  return (
    <>
      <div className={`font-bold text-2xl ${isFinished ? "text-red-700" : ""}`}>
        {minutes}:{seconds}:{milliseconds}
      </div>
    </>
  );
}
