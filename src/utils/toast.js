import { toast, Bounce } from "react-toastify";

const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  transition: Bounce,
};

export const showSuccessToast = (message) => {
  toast.success(message, toastOptions);
};

export const showFailToast = (message) => {
  toast.error(message, toastOptions);
};