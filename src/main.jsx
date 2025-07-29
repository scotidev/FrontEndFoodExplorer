import React, { use, useState } from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { AuthProvider } from "./hooks/auth";
import { Error } from "./components/Error";
import { Routes } from "./routes";

const App = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const showError = (message) => {
    setError({ message, type: "error" });
  };

  const closeError = () => {
    setError(null);
  };

  const showSuccess = (message) => {
    setSuccess({ message, type: "success" });
    setError(null);
  };

  const closeSuccess = () => {
    setSuccess(null);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider showError={showError} showSuccess={showSuccess}>
          <Routes />
        </AuthProvider>

        {error && (
          <Error
            message={error.message}
            type={error.type}
            onClose={closeError}
          />
        )}

        {success && (
          <Error
            message={success.message}
            type={success.type}
            onClose={closeSuccess}
          />
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
