import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSearchToggle = (): void => {
    setIsOpen(!isOpen);
  };

const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log("Search Term:", searchTerm);
  setIsOpen(false);
};
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50": "w-auto"}`}>
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
         <div className="relative w-1/2">
           <input 
           type="text" 
           placeholder="Search"
           onChange={(event) => setSearchTerm(event.target.value)}
           className="bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 "
           />
           {/* Search-Icon */}
           <button type="submit" className="absolute right-2 top-1/3 transform -translate-0.5 text-gray-600 hover:text-gray-800 cursor-pointer">
            <HiMagnifyingGlass className="h-6 w-6" />
           </button>
         </div>
         <button>
          <HiMiniXMark className="w-6 h-6 cursor-pointer" />
         </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;