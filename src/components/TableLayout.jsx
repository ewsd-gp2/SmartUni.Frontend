import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BsSortDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "./dialog/DeleteConfirmation";
import ShowEmpty from "./common/ShowEmpty";

const Major = ["Computing", "Information Systems", "Networking"];
const TableLayout = ({ data, handleDelete }) => {
  const userRole = localStorage.getItem("userRole");
  const [openDelete, setOpenDelete] = useState({
    isOpen: false,
    id: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate("/admin/dashboard/update", { state: { detailsId: id } });
  };
  const openDeleteModal = (id) => {
    setOpenDelete({
      isOpen: true,
      id: id,
    });
  };
  // const handleDelete = () => {
  //   const url = `http://localhost:7142/tutor/${openDelete.id}`;
  //   setLoading(true);
  //   axios
  //     .delete(url)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast.error("Sorry, something went wrong.", {
  //         position: "top-right",
  //       });
  //     });
  //   setLoading(false);
  //   setOpenDelete({ isOpen: false });
  // };
  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-5'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Image
              </th>
              <th scope='col' className='px-6 py-3'>
                Full Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Major
              </th>
              <th scope='col' className='px-6 py-3'>
                Phone Number
              </th>
              <th scope='col' className='px-6 py-3'>
                Email Address
              </th>
              <th scope='col' className='px-6 py-3'>
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Edit
              </th>
              <th scope='col' className='px-6 py-3'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data.map((item) => (
                <tr className='odd:bg-white  even:bg-gray-50 border-gray-200'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                  >
                    <img
                      className=' size-8 rounded-full'
                      src='https://i.pinimg.com/236x/da/c0/8d/dac08dbae85f1e89081126a98568c9e9.jpg'
                      alt=''
                    />
                  </th>
                  <td className='px-6 py-4'>{item.name}</td>
                  <td className='px-6 py-4'>{Major[item.major]}</td>
                  <td className='px-6 py-4'>{item.phoneNumber}</td>
                  <td className='px-6 py-4'>{item.email}</td>
                  <td className='px-6 py-4'>{item.userCode}</td>
                  <td className='px-6 py-4'>
                    <HiOutlinePencil
                      className='size-4 text-blue-500'
                      onClick={() => handleUpdate(item.id)}
                    />
                  </td>
                  <td className='px-6 py-4'>
                    <FaRegTrashAlt
                      className='size-4 text-red-500'
                      onClick={() => openDeleteModal(item.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <td colSpan={8} className='py-10 text-center'>
                <ShowEmpty />
              </td>
            )}
          </tbody>
        </table>
      </div>
      <DeleteConfirmation
        isVisible={openDelete.isOpen}
        isClose={() => setOpenDelete((prev) => ({ ...prev, isOpen: false }))}
        onConfirm={() => handleDelete(openDelete.id)}
      />
    </div>
  );
};

export default TableLayout;
