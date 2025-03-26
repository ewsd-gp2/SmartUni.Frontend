import { useId, useEffect } from "react";
import "flowbite";
import { initDropdowns } from "flowbite";

const DropDown = ({
  id,
  isOpen,
  setIsOpen,
  data,
  selectDropDown,
  setSelectDropDown,
}) => {
  const selectedItem = data.find((item) => item.id === selectDropDown[id]);
  const selectValue = (item) => {
    setSelectDropDown((prev) => ({ ...prev, [id]: item.id }));
  };

  useEffect(() => {
    initDropdowns();
  }, []);

  return (
    <div>
      <button
        id={id}
        data-dropdown-toggle={`dropdown-${id}`}
        className='text-black bg-gray-50 border border-gray-300 hover:bg-teal-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mb-4'
        type='button'
        // onClick={toggleDropdown}
      >
        {selectedItem.name}
        <svg
          className='w-2.5 h-2.5 ms-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      {/* <div
        id={`dropdown-${id}`}
        className={`${
          isOpen[id] ? "visible" : "hidden"
        } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44`}
      > */}

      <div
        id={`dropdown-${id}`}
        className='hidden
         z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44'
      >
        <ul
          className='py-2 text-sm text-gray-700'
          aria-labelledby='dropdownDefaultButton'
        >
          {data.map((item) => (
            <li key={item.id} onClick={() => selectValue(item)}>
              <a href='#' class='block px-4 py-2 hover:bg-gray-100'>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DropDown;
