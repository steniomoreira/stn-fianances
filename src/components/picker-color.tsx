"use client";

interface PickerColorProps {
  color: string;
  handleOnChange: (color: string) => void;
}

function PickerColor({ color, handleOnChange }: PickerColorProps) {
  return (
    <label
      htmlFor="pickerColor"
      className={"relative flex h-6 w-6 rounded-full"}
      style={{ background: color }}
    >
      <input
        type="color"
        id="pickerColor"
        className="cursor-pointer opacity-0"
        value={color}
        onChange={(event) => handleOnChange(event.target.value)}
      />
    </label>
  );
}

export default PickerColor;
