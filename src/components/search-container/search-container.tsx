import { Input } from "../input/input";
import { SearchButtons } from "../buttons/buttons";

interface SearchContainerProps {
  searchTerm: string;
  buttonText: string;
  onSearchTermChange: (value: string) => void;
  onSearch: () => void;
  onLuckyClick: () => void;
}

export const SearchContainer = ({
  searchTerm,
  buttonText,
  onSearchTermChange,
  onSearch,
  onLuckyClick,
}: SearchContainerProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-6">
        <Input value={searchTerm} onChange={onSearchTermChange} />
      </div>
      <SearchButtons
        buttonText={buttonText}
        onSearch={onSearch}
        onLuckyClick={onLuckyClick}
      />
    </div>
  );
}; 