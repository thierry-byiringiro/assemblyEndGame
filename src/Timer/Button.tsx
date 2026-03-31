export default function Button ({ value, onClick, backgroundColor }: { value: string; onClick: () => void; backgroundColor: string }) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex items-center justify-center font-bold bg-gray-500 p-2 rounded-md w-20 cursor-pointer"
        style={{ backgroundColor: backgroundColor }}
      >
        {value}
      </button>
    </>
  );
}
