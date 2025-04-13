import React, { memo, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const CustomDateModal = memo(
  ({ isVisible, onClose, handleSelectedRange, clearData }) => {
    const [selectDate, setSelectDate] = useState({
      startTime: new Date(),
      endTime: new Date(),
    });

    const handleDateChange = (date, name) => {
      setSelectDate((prev) => ({
        ...prev,
        [name]: date,
      }));
    };

    const onApply = () => {
      handleSelectedRange(selectDate);
      onClose();
    };

    const onCancel = () => {
      clearData();
      onClose();
    };
    const modalClasses = `fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:inset-0 max-h-full overflow-y-auto overflow-x-hidden ${
      isVisible ? "flex" : "hidden"
    } bg-black bg-opacity-20`;

    return (
      <div
        id='default-modal'
        tabindex='-1'
        aria-hidden='true'
        className={modalClasses}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div class='relative p-4 w-full max-w-2xl max-h-full'>
          <div class='relative bg-white rounded-lg shadow-sm'>
            <div class='flex items-center justify-between p-4 md:p-5 rounded-t'>
              <h3 class='text-xl font-semibold text-gray-900'>
                Choose Custom Date
              </h3>
              <button
                onClick={onCancel}
                type='button'
                class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                data-modal-hide='default-modal'
              >
                <svg
                  class='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span class='sr-only'>Close modal</span>
              </button>
            </div>
            <div className='flex flex-row justify-around'>
              <div className='col-span-2'>
                <DatePicker
                  selected={selectDate.startTime}
                  onChange={(date) => handleDateChange(date, "startTime")}
                  className='w-full bg-gray-50 border border-gray-300'
                  wrapperClassName='w-full'
                  inline
                />
              </div>
              <div className='col-span-2'>
                <DatePicker
                  selected={selectDate.endTime}
                  onChange={(date) => handleDateChange(date, "endTime")}
                  className='w-full bg-gray-50 border border-gray-300'
                  wrapperClassName='w-full'
                  inline
                />
              </div>
            </div>
            <div className='flex flex-row p-5 items-center'>
              <div className='flex flex-row w-sm gap-2 ml-5'>
                {selectDate.to && (
                  <div className='border-1 border-gray-300 px-4 py-2 rounded-md'>
                    {moment(selectDate.startTime).format("YYYY MMM DD")}
                  </div>
                )}
                -
                {selectDate.from && (
                  <div className='border-1 border-gray-300 px-4 py-2 rounded-md'>
                    {moment(selectDate.endTime).format("YYYY MMM DD")}
                  </div>
                )}
              </div>
              <div class='flex items-center rounded-b dark:border-gray-600'>
                <button
                  onClick={onApply}
                  data-modal-hide='default-modal'
                  type='button'
                  class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                >
                  Apply
                </button>
                <button
                  onClick={onCancel}
                  data-modal-hide='default-modal'
                  type='button'
                  class='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 '
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CustomDateModal;
