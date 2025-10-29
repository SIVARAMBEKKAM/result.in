import React, { useEffect, useState } from "react";
import axios from "axios";
import Teachernav from "./teachernav";
import Style1 from "./teacher.module.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";import { Link } from "react-router-dom";

const Editreslt = () => {
  const [results, setResults] = useState([]);
  const [classFilter, setClassFilter] = useState(""); // optional filter
  const navigate = useNavigate();

  // Fetch results from backend
  const fetchResults = async (cls) => {
    try {
      const url = cls
        ? `https://result-in-sand.vercel.app/api/results/class/${cls}`
        : "https://result-in-sand.vercel.app/api/results";

      const response = await axios.get(url);
      setResults(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch results");
    }
  };

  useEffect(() => {
    fetchResults(classFilter);
  }, [classFilter]);

  // Delete a result
  const deleteResult = async (id) => {
    if (!window.confirm("Are you sure you want to delete this result?")) return;
    try {
      await axios.delete(`http://localhost:8009/api/delete/result/${id}`);
      toast.success("Result deleted successfully");
      fetchResults(classFilter); // refresh list
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete result");
    }
  };

  return (
    <>
      <Teachernav />
      <div className={Style1.main}>
        <div className={Style1.heading}>Student Results</div>

        {/* Class Filter */}
        <div className={Style1.inputf1}>
          <label>Filter by Class:</label>
          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
          >
            <option value="">-- All Classes --</option>
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

        {/* Results Table */}
        <table className={Style1.table}>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Class</th>
              <th>Exam</th>
              <th>Telugu</th>
              <th>Hindi</th>
              <th>English</th>
              <th>Maths</th>
              <th>Science</th>
              <th>Social</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.length === 0 ? (
              <tr>
                <td colSpan="10">No results found</td>
              </tr>
            ) : (
              results.map((res) => (
                <tr key={res._id}>
                  <td>{res.roll}</td>
                  <td>{res.class1}</td>
                  <td>{res.exam}</td>
                  <td>{res.telugu}</td>
                  <td>{res.hindi}</td>
                  <td>{res.english}</td>
                  <td>{res.maths}</td>
                  <td>{res.science}</td>
                  <td>{res.social}</td>
                  <td  >
                    
                      <Link
                                        to={`/updateResult/${res._id}`}
                                       
                                      >
                                        <i >
                                          <img src="editlogo.png" width="40px" height="40px" alt="edit"/>
                                        </i>
                                      </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteResult(res._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Editreslt;
