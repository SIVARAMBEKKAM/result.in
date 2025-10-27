import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import ViewResult1 from "./ViewResult1";
import Teacherlogin1 from "./Teacherlogin1";
import Teacherdashboard from "./Teacherdashboard1";
import Viewstudent from "./Viewstudent";
import Addresult from "./Addresult";
import Editreult from "./Editreult";
import Add_delete from "./Add_delete";
import { Toaster } from "react-hot-toast";
import UpdateStudent from "./update";
import UpdateResult from "./updateResult";
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ViewResult1" element={<ViewResult1 />} />
        <Route path="/Teacherlogin1" element={<Teacherlogin1 />} />
                <Route path="/Teacherdashboard" element={<Teacherdashboard />} />
                <Route path="/Viewstudent" element={<Viewstudent />} />
                                <Route path="/Addresult" element={<Addresult />} />
  <Route path="/Editreult" element={<Editreult />} />
    <Route path="/update/:id" element={<UpdateStudent />} />
        <Route path="/updateResult/:id" element={<UpdateResult />} />


    <Route path="/Add_delete" element={<Add_delete />} />


      </Routes>
    </Router>
    
  );
}

export default App;
