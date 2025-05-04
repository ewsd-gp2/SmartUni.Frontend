import { useEffect, useState, useRef } from "react";
import axios from "axios";
import HeaderTitle from "../../components/common/HeaderTitle";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { IoCloudUpload, IoAddCircle } from "react-icons/io5";
import GradientButton from "../../components/buttons/GradientButton";
import { IoImages } from "react-icons/io5";

const Major = {
  Computing: 0,
  InformationSystems: 1,
  Networking: 2,
};
const UpdateStudent = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [showImage, setShowImage] = useState();

  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
    major: "",
  });
  const detailsId = location.state.detailsId || {};
  const fileInputRef = useRef();

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setStudentData((prev) => ({ ...prev, image: e.target.files[0] }));
    let file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setShowImage(imageUrl);
    }
  };
  const handleChange = (event) => {
    const { id, value } = event.target;
    setStudentData((prev) => ({ ...prev, [id]: value }));
  };
  const fetchDetails = async () => {
    const url = `http://localhost:7142/student/${detailsId}`;
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
        setStudentData({
          name: res.name,
          email: res.email,
          phoneNumber: res.phoneNumber,
          gender: res.gender === 0 ? "Male" : "Female",
          major: Object.keys(Major).find((key) => Major[key] === res.major),
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
    const isEmptyField = Object.entries(studentData).some(([key, value]) => {
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
    console.log(studentData);

    const url = `http://localhost:7142/student/${detailsId}`;
    axios
      .put(url, studentData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: true,
      })
      .then((response) => {
        toast.success("Student Updated Successfully!", {
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
      <HeaderTitle title="Update Student Account" />
      <form className="px-4 md:px-8 lg:px-16">
        <div className="mt-8 flex flex-col md:flex-row lg:flex-row lg:gap-20">
          <div className="w-full md:w-1/2 lg:w-1/2" onClick={handleClick}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {showImage ? (
              <div className="mt-4 w-full cursor-pointer relative aspect-[4/3] flex justify-center">
                <div className="absolute flex flex-row gap-2 bottom-2 bg-[#216ce7] font-bold text-white text-sm shadow-2xl px-4 py-2 rounded">
                  <IoImages size={20} />
                  <p>Change Picture</p>
                </div>
                <img
                  src={showImage}
                  alt="Preview"
                  className="w-56 h-56 lg:w-[300px] lg:h-[300px] rounded-lg border border-gray-300"
                />
              </div>
            ) : (
              <div className="w-full cursor-pointer aspect-[4/3] border-2 border-dashed border-[#14B8A6] flex flex-col items-center justify-center">
                <IoCloudUpload size={60} className="mt-5" color="#14B8A6" />
                <p className="text-xl font-bold">Upload Picture here</p>
                <p className="mt-2">Files supported: JPG, PNG and more</p>
                <div className="aspect-[4/1] mt-4 h-9 border-2 rounded-lg bg-[#14b8a6] text-white font-bold border-[#14B8A6] text-center flex justify-center items-center px-4">
                  BROWSE
                </div>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div>
              <label
                htmlFor="name"
                className=" block mb-2 w-xs text-sm font-medium text-gray-900 "
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={studentData.name}
                onChange={handleChange}
                className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:teal-500 focus:border-teal-500 block w-full p-2.5 "
                placeholder="Full Name"
                required
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Gender
              </label>
              <div className="flex flex-row gap-5">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Male"
                    checked={studentData.gender === "Male"}
                    onChange={(e) =>
                      setStudentData((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                    className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Female"
                    checked={studentData.gender === "Female"}
                    onChange={(e) =>
                      setStudentData((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                    className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="major"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Major
              </label>
              <select
                id="major"
                value={studentData.major}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="Computing" selected>
                  Computing
                </option>
                <option value="InformationSystems">{`Computing (Information Systems)`}</option>
                <option value="Networking">{`Computing (Network Systems)`}</option>
              </select>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={studentData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="xxx@gmail.com"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={studentData.phoneNumber}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="+959xxxx"
                required
              />
            </div>
            <div className="mt-8" />
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

export default UpdateStudent;
