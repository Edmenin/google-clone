import type { MouseEvent } from "react";

interface ButtonProps {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 w-[150px] hover:bg-blue-600 hover:translate-y-[-2px] transition-all duration-300 text-white p-2 rounded-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

interface SearchButtonsProps {
  buttonText: string;
  onSearch: () => void;
  onLuckyClick: () => void;
}

export function SearchButtons({
  buttonText,
  onSearch,
  onLuckyClick,
}: SearchButtonsProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-2 mt-8">
      <Button text="Pesquisa Google" onClick={onSearch} />
      <Button text={buttonText} onClick={onLuckyClick} />
    </div>
  );
}