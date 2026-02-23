export default function Keyboard() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const getKeyboard = alphabets
    .split("")
    .map((letter, index) => (
      <button style={{backgroundColor : index % 2 === 0 ? "cyan" : "gray"}} className="h-9 w-10 flex justify-center items-center text-black font-medium rounded-sm bg-amber-300 cursor-pointer">
        {letter.toUpperCase()}
      </button>
    ));
  return (
    <>
      <div className="w-120 h-33 flex flex-wrap justify-center items-center space-x-2">
        {getKeyboard}
      </div>
    </>
  );
}
