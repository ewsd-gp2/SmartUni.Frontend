import { useEffect, useState, useRef } from "react";
import axios from "axios";
import HeaderTitle from "../../components/common/HeaderTitle";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoCloudUpload, IoAddCircle } from "react-icons/io5";
import GradientButton from "../../components/buttons/GradientButton";
import { IoImages } from "react-icons/io5";

const CreateStaff = () => {
  const [staffData, setStaffData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "Female",
    password: "",
    image: null,
  });
  const [showImage, setShowImage] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setStaffData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    setStaffData((prev) => ({ ...prev, image: e.target.files[0] }));
    let file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setShowImage(imageUrl);
      console.log(imageUrl)
      
    }
  };

  const onPressRegister = async (event) => {
    event.preventDefault();
    const isEmptyField = Object.entries(staffData).some(([key, value]) => {
      if (typeof value === "string") {
        return value.trim() === "";
      }
      if (value instanceof File) {
        return value.size === 0;
      }
      return value == null;
    });

    if (isEmptyField) {
      toast.error("Please fill in all fields before submitting.", {
        position: "top-right",
      });
      return;
    }

    const url = "http://localhost:7142/staff";
    const formData = new FormData();
    formData.append("name", staffData.name);
    formData.append("email", staffData.email);
    formData.append("phoneNumber", staffData.phoneNumber);
    formData.append("gender", staffData.gender);
    formData.append("major", staffData.major);
    formData.append("image", staffData.image);
    formData.append("password", staffData.password);
    console.log(formData);
    axios
      .post(url, formData, {
        withCredentials: true,
      })
      .then((response) => {
        toast.success(`Staff ${staffData.name} created successfully!`, {
          position: "top-right",
        });
        navigate("/staff/dashboard/stafflist");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message ||"Sorry, something went wrong.", {
          position: "top-right",
        });
      });
  };
  return (
    <div>
      <HeaderTitle title='Create Staff Account' />
      <form>
        <div className='mt-8 flex flex-row gap-15'>
          <div className='' onClick={handleClick}>
            <input
              ref={fileInputRef}
              type='file'
              accept='image/*'
              onChange={handleFileChange}
              className='hidden'
            />
            {showImage ? (
              <div className='mt-4 w-xs cursor-pointer relative aspect-[4/3] flex justify-center'>
                <div className='absolute flex flex-row gap-2 bottom-2 bg-[#216ce7] font-bold text-white text-sm shadow-2xl px-4 py-2 rounded'>
                  <IoImages size={20} />
                  <p>Change Picture</p>
                </div>
                <img
                  src={showImage}
                  alt='Preview'
                  className='max-w-full h-auto rounded-lg border border-gray-300'
                />
              </div>
            ) : (
              <div
                className='w-xs cursor-pointer aspect-[4/3] border-2 border-dashed border-[#14B8A6] flex flex-col items-center'
              >
                <IoCloudUpload size={60} className='mt-5' color='#14B8A6' />
                <p className='text-xl font-bold'>Upload Picture here</p>
                <p className='mt-2'>Files supported: JPG, PNG and more</p>
                <div className='aspect-[4/1] mt-4 h-9 border-2 rounded-lg bg-[#14b8a6] text-white font-bold border-[#14B8A6] text-center flex justify-center items-center'>
                  BROWSE
                </div>
              </div>
            )}
          </div>
          <div className=''>
            <div>
              <label
                htmlFor='name'
                className=' block mb-2 w-xs text-sm font-medium text-gray-900 '
              >
                Full Name
              </label>
              <input
                type='text'
                id='name'
                value={staffData.name}
                onChange={handleChange}
                className='bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:teal-500 focus:border-teal-500 block w-full p-2.5 '
                placeholder='Full Name'
                required
              />
            </div>

            <div className='mt-4'>
              <label
                htmlFor='gender'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Gender
              </label>
              <div className='flex flex-row gap-5'>
                <label className='flex items-center gap-2'>
                  <input
                    type='radio'
                    value='Male'
                    checked={staffData.gender === "Male"}
                    onChange={(e) =>
                      setStaffData((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                    className='w-4 h-4 text-teal-600 focus:ring-teal-500'
                  />
                  Male
                </label>
                <label className='flex items-center gap-2'>
                  <input
                    type='radio'
                    value='Female'
                    checked={staffData.gender === "Female"}
                    onChange={(e) =>
                      setStaffData((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                    className='w-4 h-4 text-teal-600 focus:ring-teal-500'
                  />
                  Female
                </label>
              </div>
            </div>
           
            <div className='mt-4'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                value={staffData.email}
                onChange={handleChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='xxx@gmail.com'
                pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                required
              />
            </div>
            <div className='mt-4'>
              <label
                htmlFor='phoneNumber'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Phone Number
              </label>
              <input
                type='text'
                id='phoneNumber'
                value={staffData.phoneNumber}
                onChange={handleChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='+959xxxx'
                required
              />
            </div>
            <div className='mt-4'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                value={staffData.password}
                onChange={handleChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder=''
                required
              />
            </div>
            <div className='mt-8' />
            <GradientButton
              handleAction={onPressRegister}
              Icon={IoAddCircle}
              width={"full"}
              rounded={"xl"}
             text={"Create Staff"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateStaff;