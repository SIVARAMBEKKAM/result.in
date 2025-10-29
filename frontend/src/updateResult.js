import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Teachernav from "./teachernav";
import Style1 from "./teacher.module.css";

const UpdateResult = () => {
  const { id } = useParams(); // get result ID from URL
  const navigate = useNavigate();

  const [result, setResult] = useState({
    exam: "",
    roll: "",
    class1: "",
    telugu: "",
    hindi: "",
    english: "",
    maths: "",
    science: "",
    social: "",
  });

  // Fetch result by ID on load
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await axios.get(`http://localhost:8009/api/result/${id}`);
        setResult(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch result");
      }
    };
    fetchResult();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResult({ ...result, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8009/api/update/result/${id}`, result);
      toast.success(res.data.message || "Result updated successfully");
      navigate("/editreult"); // go back to result list
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || "Failed to update result";
      toast.error(msg);
    }
  };

  return (
    <>
      <Teachernav />
      <div className={Style1.main_update}>
        <div className={Style1.heading}>Update Student Result</div>

        <form className={Style1.addUserForm} onSubmit={handleSubmit}>
          {/* Exam */}
          <div className={Style1.inpute1}>
            <label>Exam:</label>
            <select name="exam" value={result.exam} onChange={handleChange}>
              <option value="">-- Select an Exam --</option>
              <option value="FA-1">FA-1</option>
              <option value="FA-2">FA-2</option>
              <option value="SA-1">SA-1</option>
 <option value="FA-3">FA-3</option>
              <option value="FA-4">FA-4</option>
              <option value="SA-2">SA-2</option>            </select>
          </div>

          {/* Roll */}
          <div className={Style1.inpute1}>
            <label>Roll No:</label>
            <input
              type="text"
              name="roll"
              value={result.roll}
              onChange={handleChange}
            />
          </div>

          {/* Class */}
          <div className={Style1.inpute1}>
            <label>Class:</label>
            <select name="class1" value={result.class1} onChange={handleChange}>
              <option value="">-- Select Class --</option>
              <option value="10">10</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
                <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
                    <option value="1">1</option>

            </select>
          </div>

          {/* Subject Marks */}
          {["telugu", "hindi", "english", "maths", "science", "social"].map((sub) => (
            <div className={Style1.inpute1} key={sub}>
              <label>{sub.charAt(0).toUpperCase() + sub.slice(1)}:</label>
              <input
                type="number"
                name={sub}
                value={result[sub]}
                onChange={handleChange}
                min={0}
                max={100}
              />
            </div>
          ))}

          <div className={Style1.save}>
            <button type="submit" className={Style1.updatebutton}>
              Update Result
            </button>
            <Link to="/Editreult" className={Style1.editbutton} >
              Back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateResult;
