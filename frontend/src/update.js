import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Teachernav from "./teachernav";
import Style1 from "./teacher.module.css";


const UpdateStudent = () => {
  const { id } = useParams(); // get student ID from URL
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    roll: "",
    class1: "",
  });

  // Fetch student by ID on load
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`http://localhost:8009/api/user/${id}`);
        // Ensure class1 is string (for select)
        const fetchedStudent = res.data;
        setStudent({
          ...fetchedStudent,
          class1: String(fetchedStudent.class1 || ""),
        });
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch student details");
      }
    };
    fetchStudent();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8009/api/update/user/${id}`,
        student
      );
      toast.success(res.data.message || "Student updated successfully");
      navigate("/viewstudent"); // go back to student list
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || "Failed to update student";
      toast.error(msg);
    }
  };

  return (
    <>
      <Teachernav />
      <div className={Style1.main}>
        <div className={Style1.heading}>Update Student Details</div>

        <form className={Style1.addUserForm} onSubmit={handleSubmit}>
          {/* Name */}
          <div className={Style1.inpute1}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
            />
          </div>

          {/* Roll */}
          <div className={Style1.inpute1}>
            <label>Roll No:</label>
            <input
              type="text"
              name="roll"
              value={student.roll}
              onChange={handleChange}
              placeholder="Enter roll number"
              required
            />
          </div>

          {/* Class */}
          <div className={Style1.inpute1}>
            <label>Class:</label>
            <select
              name="class1"
              value={student.class1}
              onChange={handleChange}
              required
            >
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

          <div className={Style1.save}>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
           
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateStudent;
