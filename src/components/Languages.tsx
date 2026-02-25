import Language from "../assets/languages.json";
import clsx from "clsx";
export default function Languages({wrongGuessCount} : {wrongGuessCount : number}) {
  const languages = Language.map((el, index) => {
    const isLanguageLost = index < wrongGuessCount;
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
  return (
    <>
      <div className="w-90.25 h-12.75">
        <ul className="flex justify-center items-center flex-row gap-1 flex-wrap">
          {languages}
        </ul>
      </div>
    </>
  );
}
