import { CiSearch } from "react-icons/ci";

const SearchBlock = () => {
  return (
    <div className="flex gap-1">
      <input
        type="text"
        placeholder="Search..."
        className="border border-white px-2 py-1 w-80 text-black"
      />
      <button className="bg-white text-black px-2 py-1 flex items-center">
        <CiSearch className="mr-1" />
        Search
      </button>
    </div>
  );
};

export default SearchBlock;
