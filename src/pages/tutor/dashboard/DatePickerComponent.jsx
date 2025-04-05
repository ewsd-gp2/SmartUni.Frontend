import { useEffect } from "react";
import "flowbite"; // Import Flowbite

const DatepickerComponent = () => {
  useEffect(() => {
    import("flowbite/dist/datepicker").then((datepicker) => {
      new datepicker.default(document.getElementById("datepickerId"), {});
    });
  }, []);

  return (
    <div className="relative">
      <input
        type="text"
        id="datepickerId"
        className="border p-2 rounded-lg"
        placeholder="Select a date"
      />
    </div>
  );
};

export default DatepickerComponent;
