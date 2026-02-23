import { useState } from "react";
export default function Words() {
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
    </>
  );
}
