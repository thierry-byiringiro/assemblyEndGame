import { useState } from "react";
import HandleSelection from "./HandleSelection";
import DisplayTime from "./DisplayTime";
import Button from "./Button";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const [wasClicked, setwasClicked] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const handleSelected = (value : string) => {
    setSelectedTime(value);
    if (value) {
      const minutes = Number(value);
      setTimeLeft(minutes * 60 * 1000);
      setisRunning(false);
    }
  };
  const start = () => {
    if (!selectedTime) return;
    setisRunning(true);
  };

  const pause = () => {
    setisRunning(false);
    setwasClicked((prev) => !prev);
    if (wasClicked) {
      setisRunning(true);
    }
  };

  const reset = () => {
    setisRunning(false);
    if (selectedTime) {
      const minutes = Number(selectedTime);
      setTimeLeft(minutes * 60 * 1000);
    }
  };
  
  return (
    <>
      <fieldset className="flex flex-col items-center justify-center gap-6 border border-gray-400 p-6 rounded-lg">
        <legend className="px-2 font-bold text-2xl text-gray-500">Timer</legend>
        <HandleSelection
          selectedTime={selectedTime}
          onSelect={handleSelected}
        />
        <DisplayTime elapsedTime={timeLeft} />
        <div className="flex space-x-5">
          <Button onClick={start} value="Start" backgroundColor="green" />
          <Button
            onClick={pause}
            value={wasClicked ? "Resume" : "Pause"}
            backgroundColor="#FF7F7F"
          />
          <Button onClick={reset} value="Reset" backgroundColor="blue" />
        </div>
      </fieldset>
    </>
  );
}

export default Timer;
