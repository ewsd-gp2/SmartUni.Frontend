import { useState, useEffect } from "react";
import Select from "react-select";
import LoadingButton from "../../../components/buttons/LoadingButton";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";
import { set } from "date-fns";
// const students = [
//   { id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Brown" },
//   { id: 4, name: "David Williams" },
//   { id: 5, name: "Emma Davis" },
//   { id: 6, name: "Franklin Miller" },
//   { id: 7, name: "Grace Wilson" },
// ];

const CreateMeeting2 = ({ onClose, setCurrentPart, data, setData, onPressCreate,loading }) => {
  console.log("data", data);

  const [students, setStudents] = useState([]);
  const studentOptions = students.map((student) => ({
    value: student.id,
    label: student.name,
  }));
  useEffect(() => {
    fetchStudents();
  }, []);
  const fetchStudents = async () => {
 
    const url = "http://localhost:7142/student";
    axios
      .get(url, {
        headers: {
         // "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log("get student", response.data);
        setStudents(response.data);
        const studentIds = response.data.map((student) => student.id);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, something went wrong.", {
          position: "top-right",
        });
      });

  };
  const handleChange = (selectedOptions) => {
    // let ids = [];
    // ids.push(selectedOptions.value);
    // console.log('ids',ids)
    const ids = selectedOptions.map((option) => option.value);

    //setData((prev) => ({...prev, participants:[...prev.participants,...ids]}))
    setData((prev) => ({
      ...prev,
      participants: Array.from(new Set([...prev.participants, ...ids])),
    }));
    console.log("Selected participants:", data);
  };
  const handleClick = () => {
    return;
    // setLoading(true); // Start loading
    // setTimeout(() => {
    //   setLoading(false);
    //   onClose();
    //   setCurrentPart(1); // Stop loading after 3 seconds
    // }, 3000);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      enter={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className='mb-10'>
        <label
          for='addParticipants'
          className='block mb-2 text-sm font-medium text-gray-900 w-full'
        >
          Add Participants
        </label>
        <Select
          //defaultValue={[studentOptions[2], studentOptions[3]]}
          isMulti
          name='participants'
          options={studentOptions}
          onChange={handleChange}
          className='basic-multi-select'
          classNamePrefix='select'
        />
      </div>
      <LoadingButton onPress={onPressCreate} loading={loading} />
    </motion.div>
  );
};

export default CreateMeeting2;
