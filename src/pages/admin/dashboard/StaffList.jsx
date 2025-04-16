import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import TableLayout from "../../../components/TableLayout";
import HeaderTitle from "../../../components/common/HeaderTitle";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";


const StaffList = () => {
  const navigate = useNavigate();

  const [openDelete, setOpenDelete] = useState({
    isOpen: false,
    id: "",
  });
  const [loading, setLoading] = useState(false);
  const [staffData, setStaffData] = useState([]);
  const CreateAccount = () => {
    navigate("/staff/dashboard/create/staff");
  };

  const fetchStaffData = async () => {
    setLoading(true);
    const url = "http://localhost:7142/staff";
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: "true",
      })
      .then((response) => {
        console.log("getstaff", response.data);
        setStaffData(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      });
    setLoading(false);
  };
  useEffect(() => {
    fetchStaffData();
  }, []);
  const handleDelete = (id) => {
    setLoading(true);
    const url = `http://localhost:7142/staff/${id}`;
    console.log("deleting...");
    axios
      .delete(url, {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log("delete res", response);
        fetchStaffData();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      });
    setLoading(false);
  };

  return (
    <main>
      <Container>
        <div className=' flex col-span-4 gap-5'>
          <div className=' mt-5 w-full'>
            <HeaderTitle title='Staff List' />
            <div className='mb-8'/>
            {/* <div className='flex flex-row justify-between'>
              <div className=' flex items-center justify-between mt-5'>
                <button
                  className='rounded-3xl py-3 px-4 flex flex-row gap-1.5 justify-center bg-gradient-to-br from-green-400 to-blue-600 text-white  transition-transform duration-300 hover:scale-105 hover:bg-green-500'
                  onClick={CreateAccount}
                >
                  <IoAddCircle
                    size={20}
                    color='white'
                    className='self-center'
                  />
                  <span className='self-center font-semibold'>New Tutor</span>
                </button>
              </div>
            </div> */}
   
              <TableLayout data={staffData} userRole='staff' handleDelete={handleDelete} CreateAccount={CreateAccount} loading={loading} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default StaffList;
