import { HiSearch } from "react-icons/hi";

const SearchInput = ({className}) => {
  return (
    <div className={`relative ${className}`}>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <HiSearch className=' text-gray-400 text-xl' />
      </div>
      <input
        type='search'
        className='block w-96 rounded-2xl p-3 ps-8 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
        placeholder='Search'
      />
    </div>
  );
};

export default SearchInput;
