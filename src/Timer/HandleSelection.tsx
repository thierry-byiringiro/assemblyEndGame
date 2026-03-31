function HandleSelection({ selectedTime, onSelect }: { selectedTime: string; onSelect: (value: string) => void }) {
  return (
    <div>
      <select
        name=""
        id=""
        value={selectedTime}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Time(min)</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default HandleSelection;
