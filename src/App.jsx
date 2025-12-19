import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound";
import { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react";

function App() {
  const [isLoad,setIsload] = useState(false);

  useEffect(()=>{
    setIsload(true)
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  },[])
  return (
    
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-right"  />
    </BrowserRouter>
  );
}

export default App;
