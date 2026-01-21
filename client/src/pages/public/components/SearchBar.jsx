function SearchBar() {
  return (
    <div className="w-full flex justify-center px-4 md:px-10 my-8 bg-gray-50">
      <div className="flex flex-col md:flex-row items-stretch md:items-center 
                      bg-white shadow-xl rounded-2xl md:rounded-full 
                      w-full max-w-6xl px-5 md:px-12 py-5 md:py-7 gap-4 md:gap-0">
        
        {/* Search Icon + Input */}
        <div className="flex items-center flex-1 gap-3">
          <span className="text-gray-400 text-2xl md:text-3xl">🔍</span>
          <input
            type="text"
            placeholder="Enter skills / designations / companies"
            className="w-full outline-none text-lg md:text-xl text-gray-700 
                       placeholder-gray-400 pl-2 
                       focus:text-xl md:focus:text-2xl 
                       transition-all duration-200"
          />
        </div>

        {/* Divider (hide on mobile) */}
        <div className="hidden md:block h-8 w-px bg-gray-300 mx-6"></div>

        {/* Button */}
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white 
                     px-8 md:px-12 py-3 md:py-4 
                     rounded-xl md:rounded-full 
                     text-base md:text-xl font-semibold 
                     transition w-fit "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
