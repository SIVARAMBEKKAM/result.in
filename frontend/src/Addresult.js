import Style1 from './teacher.module.css';
import Teachernav from './teachernav';
import React, { useState } from "react";

function Addresult() {
  const [result, setResult] = useState({
    exam: "",
    roll: "",
    class1: "",  // renamed from 'class' to 'class1'
    telugu: "",
    hindi: "",
    english: "",
    maths: "",
    science: "",
    social: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResult({ ...result, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      !result.exam ||
      !result.roll ||
      !result.class1 ||
      !result.telugu ||
      !result.hindi ||
      !result.english ||
      !result.maths ||
      !result.science ||
      !result.social
    ) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8009/api/addresult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      });

      if (res.ok) {
        alert("✅ Result added successfully!");
        setResult({
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
      } else {
        alert("❌ Failed to add result. Try again!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Backend not connected or error occurred!");
    }
  };

  return (
    <>
      <Teachernav />
      <div className={Style1.main}>
        <div className={Style1.heading}>Enter Result</div>

        <div className={Style1.inputs}>
          {/* Exam Type */}
          <div className={Style1.input1}>
            <label className={Style1.label}>Enter the Exam<br /></label>
            <select
              name="exam"
              className={Style1.select}
              value={result.exam}
              onChange={handleChange}
            >
             <option value="">-- Select an Exam --</option>
              <option value="FA-1">FA-1</option>
              <option value="FA-2">FA-2</option>
              <option value="SA-1">SA-1</option>
 <option value="FA-3">FA-3</option>
              <option value="FA-4">FA-4</option>
              <option value="SA-2">SA-2</option>   
            </select>
          </div>

          {/* Roll Number */}
          <div className={Style1.input1}>
            <label>Enter the roll number<br /></label>
            <input
              type="text"
              name="roll"
              value={result.roll}
              onChange={handleChange}
            />
          </div>

          {/* Class */}
          <div className={Style1.input1}>
            <label>Enter the class</label><br />
            <select
              name="class1"
              value={result.class1}
              onChange={handleChange}
            >
              <option value="">-- Select a Class --</option>
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
          <div className={Style1.subject}>Subject Marks</div>

          {["telugu","hindi","english","maths","science","social"].map((sub) => (
            <div className={Style1.input1} key={sub}>
              <label>{sub.charAt(0).toUpperCase() + sub.slice(1)}<br /></label>
              <input
                type="number"
                name={sub}
                placeholder="enter marks"
                value={result[sub]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        <div className={Style1.save}>
          <button type="button" onClick={handleSubmit}>SaveResults</button>
        </div>
      </div>
    </>
  );
}

export default Addresult;
