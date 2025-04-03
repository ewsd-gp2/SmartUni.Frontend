import { useEffect, useState } from "react";
import axios from "axios";
import HeaderTitle from "../../components/common/HeaderTitle";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

const Gender = {
  Male: 0,
  Female: 1,
};

const UpdateStaff = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [staffDetails, setStaffDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });
  const detailsId = location.state.detailsId || {};
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const url = `http://localhost:7142/staff/%7Bid%7D/${detailsId}`;
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log("FETCHDETAILS", response);
        const res = response.data;
        setStaffDetails({
          name: res.name,
          email: res.email,
          phoneNumber: res.phoneNumber,
          gender: res.gender,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      });
    setLoading(false);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setStaffDetails((prev) => ({ ...prev, [id]: value }));
  };

  const onPressUpdate = async (event) => {
    event.preventDefault();
    const isEmptyField = Object.values(staffDetails).some(
      (value) => value.trim() === ""
    );
    if (isEmptyField) {
      toast.error("Please fill in all fields before submitting.", {
        position: "top-right",
      });
      return;
    }
    const updatedStaffDetails = {
      ...staffDetails, 
      gender: Gender[staffDetails.gender],
    };
    const url = `http://localhost:7142/tutor/${detailsId}`;
    axios
      .put(url, updatedStaffDetails)
      .then((response) => {
        toast.success("Staff Edited Successfully!", {
          position: "top-right",
        });
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      });
  };

  return (
    <div>
      <HeaderTitle title='Update Staff Account' />
      <form>
        <div className='grid gap-6 mb-6 md:grid-cols-2 w-5xl mt-10'>
          <div>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Full Name
            </label>
            <input
              type='text'
              id='name'
              value={staffDetails.name}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Full Name'
              required
            />
          </div>
          <div>
            <label
              htmlFor='gender'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Gender
            </label>
            <select
              id='gender'
              value={staffDetails.gender}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option value='Male'>Male</option>
              <option value='Female' selected>
                Female
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email Address
            </label>
            <input
              type='text'
              id='email'
              value={staffDetails.email}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='xxx@gmail.com'
              pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              required
            />
          </div>
          <div>
            <label
              htmlFor='phoneNumber'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Phone Number
            </label>
            <input
              type='text'
              id='phoneNumber'
              value={staffDetails.phoneNumber}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='+959xxxx'
              required
            />
          </div>
          <div>
            <label
              htmlFor='visitors'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Password
            </label>
            <input
              type='text'
              id='password'
              value={staffDetails.password}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder=''
              required
            />
          </div>
         
          <div className='md:col-start-2 flex justify-end gap-5 mt-10'>
            <button
              onClick={onPressUpdate}
              type='submit'
              className='text-white w-68 bg-[#11a186] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Update
            </button>
            <button
              type='cancel'
              className=' bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateStaff;
