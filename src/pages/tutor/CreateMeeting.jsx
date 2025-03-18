import { useState } from "react";
import DatePicker from "react-datepicker";
import DropDown from "../../components/common/DropDown";
import CreateMeeting2 from "./CreateMeeting2";

import "react-datepicker/dist/react-datepicker.css";

const platform = [
  {
    id: 1,
    name: "Zoom",
  },
  {
    id: 2,
    name: "Google Meet",
  },
  {
    id: 3,
    name: "Microsoft Teams",
  },
];

const repeating = [
  {
    id: 1,
    name: "Weekly",
  },
  {
    id: 2,
    name: "Monthly",
  },
  {
    id: 3,
    name: "None",
  },
];

const CreateMeeting = ({ isVisible, onClose }) => {
  const [selectDropDown, setSelectDropDown] = useState({
    platform: 1,
    repeating: 1,
  });
  const [meetingDate, setMeetingDate] = useState(new Date());
  const [currentPart, setCurrentPart] = useState(1);
  const [selectTime, setSelectTime] = useState({
    from: new Date(),
    to: new Date(),
  });
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState({
    platform: false,
    repeating: false,
  });
  console.log(isVisible);
  const modalClasses = `fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:inset-0 max-h-full overflow-y-auto overflow-x-hidden ${
    isVisible ? "flex" : "hidden"
    } bg-black bg-opacity-20`;
  

  const handleDateChange = (date) => {
    console.log("Date changed:", date);
    setStartDate(date);
  };

  return (
    <div
      id='crud-modal'
      tabindex='-1'
      aria-hidden='true'
      className={modalClasses}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow-sm'>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200'>
            <h3 className='text-lg font-semibold text-gray-900 '>
              Add new event
            </h3>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center '
              data-modal-toggle='crud-modal'
              onClick={onClose}
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
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <form className='p-4 md:p-5 '>
            {currentPart == 1 && (
              <section>
                <div className='grid gap-4 mb-4 grid-cols-2'>
                  <div className='col-span-2'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                      placeholder='Meeting Heading...'
                      required=''
                    />
                  </div>
                  <div className='col-span-2'>
                    <label
                      for='price'
                      className='block mb-2 text-sm font-medium text-gray-900 w-full'
                    >
                      Meeting Date
                    </label>
                    <DatePicker
                      selected={startDate}
                      // onSelect={handleDateSelect}
                      onChange={handleDateChange}
                      className='w-full bg-gray-50 border border-gray-300'
                      wrapperClassName='w-full'
                    />
                  </div>
                </div>
                <div className='flex flex-row justify-start mb-4'>
                  <div>
                    <label
                      for='price'
                      className='block mb-2 text-sm font-medium text-gray-900 w-full'
                    >
                      From
                    </label>
                    <DatePicker
                      selected={selectTime.from}
                      onChange={(date) =>
                        setSelectTime((prev) => ({ ...prev, from: date }))
                      }
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption='Time'
                      dateFormat='h:mm aa'
                      className='w-1/2 bg-gray-50 border border-gray-300'
                    />
                  </div>
                  <div>
                    <label
                      for='price'
                      className='block mb-2 text-sm font-medium text-gray-900 w-full'
                    >
                      To
                    </label>
                    <DatePicker
                      selected={selectTime.to}
                      onChange={(date) =>
                        setSelectTime((prev) => ({ ...prev, to: date }))
                      }
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption='Time'
                      dateFormat='h:mm aa'
                      className='w-1/2 bg-gray-50 border border-gray-300'
                    />
                  </div>
                </div>
                <label class=' col-span-2 mb-4 flex flex-row items-center cursor-pointer'>
                  <input type='checkbox' value='' class='sr-only peer' />
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600 dark:peer-checked:bg-teal-600"></div>
                  <span class='ms-3 text-sm font-medium text-gray-900'>
                    Online
                  </span>
                </label>
                <div class='col-span-2'>
                  <label
                    for='platform'
                    className='block mb-2 text-sm font-medium text-gray-900 w-full'
                  >
                    Choose Platform
                  </label>
                  <DropDown
                    data={platform}
                    id='platform'
                    // isOpen={isOpen}
                    //   setIsOpen={setIsOpen}
                    setSelectDropDown={setSelectDropDown}
                    selectDropDown={selectDropDown}
                  />
                </div>
                <div class='col-span-2 mb-4'>
                  <textarea
                    id='description'
                    rows='4'
                    class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Paste meeting link here'
                  ></textarea>
                </div>
                <div class='col-span-2'>
                  <label
                    for='repeating'
                    className='block mb-2 text-sm font-medium text-gray-900 w-full'
                  >
                    Repeating
                  </label>
                  <DropDown
                    data={repeating}
                    id={"repeating"}
                    // isOpen={isOpen}
                    // setIsOpen={setIsOpen}
                    selectDropDown={selectDropDown}
                    setSelectDropDown={setSelectDropDown}
                  />
                </div>
                <div className='flex justify-end'>
                  <button
                    type='button'
                    onClick={() => setCurrentPart(2)}
                    className='text-white ml-auto bg-teal-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
                  >
                    Next
                    <svg
                      class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 10'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M1 5h12m0 0L9 1m4 4L9 9'
                      />
                    </svg>
                  </button>
                </div>
              </section>
            )}
            {currentPart == 2 && <CreateMeeting2 onClose={onClose} setCurrentPart={setCurrentPart} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMeeting;
