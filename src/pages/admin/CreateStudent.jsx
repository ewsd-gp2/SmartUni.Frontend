import { useEffect, useState } from "react";
import axios from "axios";
import HeaderTitle from "../../components/common/HeaderTitle";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "Female",
    major: "Computing",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { id, value } = event.target;
    setStudentData((prev) => ({ ...prev, [id]: value }));
  };
  const token = localStorage.getItem("access_token");

  const onPressRegister = async (event) => {
    event.preventDefault();
    const isEmptyField = Object.values(studentData).some(
      (value) => value.trim() === ""
    );
    if (isEmptyField) {
      toast.error("Please fill in all fields before submitting.", {
        position: "top-right",
      });
      return;
    }
  if (!token) {
    toast.error("Token not found, please log in again.", {
      position: "top-right",
    });
    return;
  }
    const url = "http://localhost:7142/student";
    console.log(studentData)
    axios
    .post(url, JSON.stringify(studentData), {
      headers: {
       // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", 
        "Access-Control-Allow-Origin": "http://localhost:5173"
       // Accept: "application/json",
       // "Allow-Control-Allow-Origin":"*"

      },
      withCredentials:true
    })
      .then((response) => {
        toast.success(`Student ${studentData.name} Created Successfully!`, {
          position: "top-right",
        });
        navigate("/staff/dashboard/studentlist");
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
      <HeaderTitle title='Create Student Account' />
      <form>
        <div className='grid gap-6 mb-6 md:grid-cols-2 w-5xl mt-10'>
          <div>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Full Name
            </label>
            <input
              type='text'
              id='name'
              value={studentData.name}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='Full Name'
              required
            />
          </div>
          <div>
            <label
              htmlFor='gender'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Gender
            </label>
            <select
              id='gender'
              value={studentData.gender}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            >
              <option value='Male'>Male</option>
              <option value='Female' selected>
                Female
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor='major'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Major
            </label>
            <select
              id='major'
              value={studentData.major}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            >
              <option value='Computing' selected>
                Computing
              </option>
              <option value='InformationSystems'>{`Computing (Information Systems)`}</option>
              <option value='Networking'>{`Computing (Network Systems)`}</option>
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
              value={studentData.email}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='xxx@gmail.com'
              pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              required
            />
          </div>
          <div>
            <label
              htmlFor='phoneNumber'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Phone Number
            </label>
            <input
              type='text'
              id='phoneNumber'
              value={studentData.phoneNumber}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='+959xxxx'
              required
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              value={studentData.password}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder=''
              required
            />
          </div>
          <div className='md:col-start-2 flex justify-end gap-5 mt-10'>
            <button
              onClick={onPressRegister}
              type='submit'
              className='text-white w-68 bg-[#11a186] hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center '
            >
              Register
            </button>
            <button
              type='cancel'
              className=' bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateStudent;
