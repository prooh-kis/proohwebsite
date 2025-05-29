import React, { useState, useEffect, useRef } from "react";

export const SearchableSelect: React.FC<{
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
}> = ({ options, onChange, placeholder, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>(value);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(value);

  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const filteredOptions =
    searchTerm.length === 0
      ? []
      : options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      e.preventDefault();
      handleOptionClick(filteredOptions[focusedIndex].value);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <input
        type="text"
        value={
          selectedOption
            ? options.find((o) => o.value === selectedOption)?.label || ""
            : searchTerm
        }
        onChange={(e) => {
          setSearchTerm(e.target.value.toUpperCase());
          setSelectedOption(null);
          if (!isOpen) setIsOpen(true);
          setFocusedIndex(-1);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="border rounded-[8px] h-[48px] w-full pl-5 py-2 pr-4 focus:outline-none focus:ring-2 focus:ring-[#129BFF] hover:bg-gray-100 active:bg-blue-100 transition-colors"
      />

      {isOpen && (
        <div
          className="absolute z-10 w-full bg-white border shadow-md max-h-60 overflow-y-auto"
          role="listbox"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                onMouseEnter={() => setFocusedIndex(index)}
                className={`px-4 py-2 cursor-pointer ${
                  focusedIndex === index ? "bg-[#D7D7D7]" : "hover:bg-[#D7D7D7]"
                }`}
                role="option"
                // aria-selected={focusedIndex === index} // Ensuring a valid boolean value
              >
                {option.label}
              </div>
            ))
          ) : searchTerm.length > 0 ? (
            <div className="px-4 py-2 text-gray-500">No options found</div>
          ) : null}
        </div>
      )}
    </div>
  );
};
