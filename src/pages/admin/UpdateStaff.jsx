import { useEffect, useState, useRef } from "react";
import axios from "axios";
import HeaderTitle from "../../components/common/HeaderTitle";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { IoCloudUpload, IoAddCircle } from "react-icons/io5";
import GradientButton from "../../components/buttons/GradientButton";
import { IoImages } from "react-icons/io5";


const UpdateStaff = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [showImage, setShowImage] = useState();

  const [staffData, setStaffData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });
  const detailsId = location.state.detailsId || {};
  const fileInputRef = useRef();
  console.log("LOCATION STATE:", location.state);
  useEffect(() => {
    fetchDetails();
  }, []);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setStaffData((prev) => ({ ...prev, image: e.target.files[0] }));
    let file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setShowImage(imageUrl);
    }
  };
  const handleChange = (event) => {
    const { id, value } = event.target;
    setStaffData((prev) => ({ ...prev, [id]: value }));
  };
  const fetchDetails = async () => {
    const url = `http://localhost:7142/staff/${detailsId}`;
    setLoading(true);
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log("FETCHDETAILS", response);
        const res = response.data;
        setStaffData({
          name: res.name,
          email: res.email,
          phoneNumber: res.phoneNumber,
          gender: res.gender === 0 ? "Male" : "Female",
      });
        setShowImage(`data:image/jpeg;base64,${res.image}`);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      });
    setLoading(false);
  };

  const onPressUpdate = async (event) => {
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
    console.log(staffData);
   
    const url = `http://localhost:7142/staff/${detailsId}`;
    axios
      .put(url, staffData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: true,
      })
      .then((response) => {
        toast.success("Staff Updated Successfully!", {
          position: "top-right",
        });
        navigate("/staff/dashboard/stafflist");
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
              <div className='w-xs cursor-pointer aspect-[4/3] border-2 border-dashed border-[#14B8A6] flex flex-col items-center'>
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
                for='name'
                class=' block mb-2 w-xs text-sm font-medium text-gray-900 '
              >
                Full Name
              </label>
              <input
                type='text'
                id='name'
                value={staffData.name}
                onChange={handleChange}
                class='bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:teal-500 focus:border-teal-500 block w-full p-2.5 '
                placeholder='Full Name'
                required
              />
            </div>

            <div className='mt-4'>
              <label
                for='gender'
                class='block mb-2 text-sm font-medium text-gray-900 '
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
                for='email'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Email
              </label>
              <input
                type='text'
                id='email'
                value={staffData.email}
                onChange={handleChange}
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='xxx@gmail.com'
                pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                required
              />
            </div>
            <div className='mt-4'>
              <label
                for='phoneNumber'
                class='block mb-2 text-sm font-medium text-gray-900 '
              >
                Phone Number
              </label>
              <input
                type='text'
                id='phoneNumber'
                value={staffData.phoneNumber}
                onChange={handleChange}
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='+959xxxx'
                required
              />
            </div>
            <div className='mt-8' />
            <GradientButton
              handleAction={onPressUpdate}
              Icon={IoAddCircle}
              width={"full"}
              rounded={"xl"}
              text={"Update Account"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateStaff;

