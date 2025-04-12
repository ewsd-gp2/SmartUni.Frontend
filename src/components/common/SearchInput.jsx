import { HiSearch } from "react-icons/hi";

const SearchInput = ({ className, onFilter, onClear, filterText }) => {
  return (
    <div className={`relative ${className}`}>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <HiSearch className=' text-gray-400 text-xl' />
      </div>
      <input
        type='search'
        className='block w-86 rounded-2xl p-3 ps-8 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-teal-500 focus:border-teal-500'
        placeholder='Search'
        value={filterText}
        onChange={onFilter} 
      />
      {filterText && (
        <button
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-gray-500"
          onClick={onClear}
        >
          ✖
        </button>
      )}
    </div>
  );
};

export default SearchInput;
