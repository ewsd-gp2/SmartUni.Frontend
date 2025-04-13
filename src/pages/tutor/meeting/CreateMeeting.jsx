import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import DropDown from "../../../components/common/DropDown";
import CreateMeeting2 from "./CreateMeeting2";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";

import "react-datepicker/dist/react-datepicker.css";

const platform = [
  {
    id: "Zoom",
    name: "Zoom",
  },
  {
    id: "GoogleMeet",
    name: "Google Meet",
  },
  {
    id: "MicrosoftTeams",
    name: "Microsoft Teams",
  },
];

const CreateMeeting = ({ isVisible, onClose }) => {
  const user = JSON.parse(localStorage.getItem("user_profile"));
  console.log(user);
  const [loading, setLoading] = useState(false);
  const [selectDropDown, setSelectDropDown] = useState({
    platform: 1,
    repeating: 1,
  });
  const [meetingDate, setMeetingDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [selectTime, setSelectTime] = useState({
    from: new Date(),
    to: new Date(),
  });
  const [currentPart, setCurrentPart] = useState(1);
  const startDateTime = moment(startDate)
    .set({
      hour: moment(selectTime.from).hour(),
      minute: moment(selectTime.from).minute(),
      second: moment(selectTime.from).second(),
      millisecond: moment(selectTime.from).millisecond(),
    })
    .toISOString();

  const endDateTime = moment(startDate)
    .set({
      hour: moment(selectTime.to).hour(),
      minute: moment(selectTime.to).minute(),
      second: moment(selectTime.to).second(),
      millisecond: moment(selectTime.to).millisecond(),
    })
    .toISOString();

  const [meetingForm, setMeetingForm] = useState({
    startTime: startDateTime,
    endTime: endDateTime,
    organizerId: user.id,
    participants: [],
    title: "",
    isOnline: false,
    location: "",
    linkType: "Zoom",
    url: "",
    agenda: "",
  });

  const modalClasses = `fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:inset-0 max-h-full overflow-y-auto overflow-x-hidden ${
    isVisible ? "flex" : "hidden"
  } bg-black bg-opacity-20`;

  useEffect(() => {
    setMeetingForm((prev) => ({
      ...prev,
      startTime: startDateTime,
      endTime: endDateTime,
    }));
  }, [startDateTime, endDateTime]);

  const handleDateChange = (date) => {
    console.log("Date changed:", date);
    setStartDate(date);
  };

  const handleCloseIcon = () => {
    onClose();
    setCurrentPart(1);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setMeetingForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleToggleChange = (e) => {
    setMeetingForm((prev) => ({
      ...prev,
      isOnline: e.target.checked,
    }));
  };

  const firstFormNext = () => {
    console.log("MEETING FORM:", meetingForm);
    if (!meetingForm.title) {
      setMessage("Please fill in title");
      return;
    }
    if (!meetingForm.isOnline && !meetingForm.location) {
      setMessage("Location is required for offline meetings!");
      return;
    }
    if (meetingForm.isOnline && !meetingForm.url) {
      setMessage("Meeting link is required for online meetings!");
      return;
    }
    setCurrentPart(2);
    setMessage("");
  };

  const onPressCreate = async (event) => {
    event.preventDefault();
    if (meetingForm.participants.length === 0) {
      setMessage("Participant is required");
      return;
    }
    setMessage("");
    console.log("meetingForm", meetingForm);
    setLoading(true);
    const url = "http://localhost:7142/meeting";
    axios
      .post(url, JSON.stringify(meetingForm), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log('res',response)
        toast.success("Meeting Created Successfully!", {
          position: "top-right",
        });
        onClose();
        setCurrentPart(1);
      })
      .catch((error) => {
        setMessage(error?.response?.data[0]?.errorMessage);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const RadioList = () => {
    return (
      <div className='flex flex-row justify-around mb-4'>
        {platform.map((item) => (
          <label className='flex items-center gap-2'>
            <input
              type='radio'
              value={item.id}
              checked={meetingForm.linkType === item.id}
              onChange={(e) =>
                setMeetingForm((prev) => ({
                  ...prev,
                  linkType: e.target.value,
                }))
              }
              className='w-4 h-4 text-teal-600 focus:ring-teal-500'
            />
            {item.name}
          </label>
        ))}
      </div>
    );
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
              onClick={handleCloseIcon}
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
            {message && <div className='text-red-600 mb-2'>{message}</div>}
            {currentPart == 1 && (
              <section>
                <div className='grid gap-4 mb-4 grid-cols-2'>
                  <div className='col-span-2'>
                    <label
                      for='price'
                      className='block mb-2 text-sm font-medium text-gray-900 w-full'
                    >
                      Meeting Heading
                    </label>
                    <input
                      type='text'
                      value={meetingForm.title}
                      onChange={handleChange}
                      id='title'
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

                <label class=' col-span-2 w-1/2 mb-4 flex flex-row items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    onChange={handleToggleChange}
                    checked={meetingForm.isOnline}
                    class='sr-only peer'
                  />
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600 dark:peer-checked:bg-teal-600"></div>
                  <span class='ms-3 text-sm font-medium text-gray-900'>
                    Online
                  </span>
                </label>
                <div>
                  <label
                    for='platform'
                    className='block mb-2 text-sm font-medium text-gray-900 w-full'
                  >
                    Choose Platform {`(Please skip if offline)`}
                  </label>
                  <RadioList />
                </div>
                <div class='col-span-2 mb-4'>
                  <label
                    for='location'
                    className='block mb-2 text-sm font-medium text-gray-900 w-full'
                  >
                    Location
                  </label>
                  <textarea
                    id='location'
                    onChange={handleChange}
                    value={meetingForm.location}
                    rows='2'
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='If online is not selected, write the location for in person meeting.'
                  ></textarea>
                </div>
                <div class='col-span-2 mb-4'>
                  <label
                    for='meetinglink'
                    className='block mb-2 text-sm font-medium text-gray-900 w-full'
                  >
                    Meeting Link
                  </label>
                  <textarea
                    id='url'
                    value={meetingForm.url}
                    onChange={handleChange}
                    rows='2'
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Paste meeting link here'
                  ></textarea>
                </div>
                <div className='flex justify-end'>
                  <button
                    type='button'
                    onClick={firstFormNext}
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
            {currentPart == 2 && (
              <CreateMeeting2
                data={meetingForm}
                setData={setMeetingForm}
                onClose={onClose}
                setCurrentPart={setCurrentPart}
                onPressCreate={onPressCreate}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMeeting;
