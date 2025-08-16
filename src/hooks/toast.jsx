import { createContext, useContext, useState } from "react";
import { Toast } from "../components/Toast";

const ToastContext = createContext({});

function ToastProvider({ children }) {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message, type) => {
    setToastMessage({ message, type });
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  const showError = (message) => showToast(message, "error");
  const showSuccess = (message) => showToast(message, "success");

  return (
    <ToastContext.Provider value={{ showError, showSuccess }}>
      {children}
      {toastMessage && (
        <Toast
          message={toastMessage.message}
          type={toastMessage.type}
          onClose={closeToast}
        />
      )}
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);
  return context;
}

export { ToastProvider, useToast };
