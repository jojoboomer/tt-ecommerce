import { useProductStore } from "../../store/products";

const SearchInput = () => {
  const { filters, setFilters } = useProductStore();

  const handleReset = () => {
    setFilters({ searchText: "" });
  };

  return (
    <form className="relative flex h-full w-full items-center rounded bg-background transition-transform duration-350">
      <button type="button" className="text-[#8b8ba7] focus:outline-none px-2">
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <input
        className="h-full w-full bg-transparent py-2 text-sm placeholder:text-[#8b8ba7] focus:outline-none"
        placeholder="Type your text"
        type="text"
        value={filters.searchText}
        onChange={(e) => setFilters({ searchText: e.target.value })}
      />

      <button
        type="reset"
        onClick={handleReset}
        className={`text-[#8b8ba7] transition-opacity duration-75 px-2 ${
          filters.searchText ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 bg-[#2f2ee9] transition-transform duration-300 group-focus-within:scale-x-100" />
    </form>
  );
};

export default SearchInput;
