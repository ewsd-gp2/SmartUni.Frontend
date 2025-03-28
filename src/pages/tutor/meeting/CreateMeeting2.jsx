import { useState } from "react";
import Select from "react-select";
import LoadingButton from "../../../components/buttons/LoadingButton";
import { motion } from "framer-motion";

const students = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "David Williams" },
  { id: 5, name: "Emma Davis" },
  { id: 6, name: "Franklin Miller" },
  { id: 7, name: "Grace Wilson" },
];

const CreateMeeting2 = ({ onClose, setCurrentPart }) => {
  const [loading, setLoading] = useState(false);
  const studentOptions = students.map((student) => ({
    value: student.id,
    label: student.name,
  }));
  const handleClick = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false);
      onClose();
      setCurrentPart(1); // Stop loading after 3 seconds
    }, 3000);
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
          defaultValue={[studentOptions[2], studentOptions[3]]}
          isMulti
          name='participants'
          options={studentOptions}
          className='basic-multi-select'
          classNamePrefix='select'
        />
      </div>
      <LoadingButton onPress={handleClick} loading={loading} />
    </motion.div>
  );
};

export default CreateMeeting2;
