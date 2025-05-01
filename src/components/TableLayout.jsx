import React, { useState, useMemo } from "react";
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
import DataTable from "react-data-table-component";
import SearchInput from "./common/SearchInput";
import GradientButton from "./buttons/GradientButton";
import { IoAddCircle } from "react-icons/io5";
import loadingAnimation from "../assets/lottie/loading.json";
import Lottie from "lottie-react";

const Major = ["Computing", "Information Systems", "Networking"];

const TableLayout = ({ data, handleDelete, CreateAccount, loading ,userRole }) => {
  // const userData = Array.isArray(data) ? data : [];
const shouldIncludeMajor = Array.isArray(data) && data.some((row) => row.major !== undefined);
const roleLabels ={
  tutor : "New Tutor",
  student : "New Student",
  staff : "New Staff"
  }
  console.log(data)

  const columns = [
    {
      name: "Image",
      selector: (row) => row.image,
      sortable: true,
      minWidth: "100px",
      cell: (row) => (
        <img
          src={`data:image/jpeg;base64,${row.image}`}
          className="size-9 rounded-full object-cover"
          
        />
      ),
    },
    {
      name: "Full Name",
      selector: (row) => row.name,
      sortable: true,
      mdWith: "100px",
      
    },
    ...(shouldIncludeMajor
      ? [
          {
            name: "Major",
            selector: (row) => Major[row.major],
             minWidth: "100px",
             hide : "sm",
          },
        ]
      : []),
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      minWidth: "120px",
             hide : "sm",
    },
    {
      name: "Email Address",
      selector: (row) => row.email,
      minWidth: "120px",
             hide : "md",
    },
    {
      name: "ID",
      selector: (row) => row.userCode,
      minWidth: "120px",
             hide : "md",
    },
    {
      name: "Edit",
      minWidth: "100px",
      cell: (row) => (
        <HiOutlinePencil
          className="size-4 md:size-5 text-blue-500"
          onClick={() => handleUpdate(row.id)}
        />
      ),
    },
    {
      name: "Delete",
      minWidth: "100px",
      cell: (row) => (
        <FaRegTrashAlt
          className="size-4 md:size-5 text-red-500"
          onClick={() => openDeleteModal(row.id)}
        />
      ),
    },
  ];
  const [openDelete, setOpenDelete] = useState({
    isOpen: false,
    id: "",
  });
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems =
    data.length > 0
      ? data.filter(
          (item) =>
            item.name &&
            item.name.toLowerCase().includes(filterText.toLowerCase())
        )
      : [];
 
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    console.log("hello");
    navigate(`/staff/dashboard/update/${userRole}`, { state: { detailsId: id } });
  };
  const openDeleteModal = (id) => {
    setOpenDelete({
      isOpen: true,
      id: id,
    });
  };
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <div className="w-full flex flex-row justify-between items-center py-2 gap-4">
        <SearchInput
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
          className="self-start"
        />
        <GradientButton handleAction={CreateAccount} Icon={IoAddCircle} label={roleLabels[userRole]} />
      </div>
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <div className="">
      <DataTable
        columns={columns}
        data={filteredItems}
        progressComponent={
          <Lottie
            autoplay
            loop
            animationData={loadingAnimation}
            style={{ width: "100px", height: "100px" }}
          />
        }
        progressPending={loading}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        customStyles={{
          subHeader: {
            style: {
              padding: "0",
            },
          },
        }}
      />
      {/* <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-5'>
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
      /> */}
      <DeleteConfirmation
        isVisible={openDelete.isOpen}
        isClose={() => setOpenDelete((prev) => ({ ...prev, isOpen: false }))}
        onConfirm={() => handleDelete(openDelete.id)}
        userRole={userRole}
      />
    </div>
  );
};

export default TableLayout;
