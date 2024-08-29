import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import {ToastContainer} from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
          <ThemeProvider>
              <App/>
              <ToastContainer position="top-center" />
          </ThemeProvider>
      </ChakraProvider>
  </React.StrictMode>,
)
