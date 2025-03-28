import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { Toaster} from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Toaster
      position='top-center'
      reverseOrder={false}
      gutter={8}
      containerClassName=''
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 3000,

        style: {
          background: "#363636",
          color: "#fff",
          fontFamily: "Roboto",
        },

        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  </>
);
