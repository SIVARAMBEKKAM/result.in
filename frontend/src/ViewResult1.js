import React, { useState } from "react";
import Navbar from "./navbar";
import Style1 from "./result.module.css";
import Style2  from "./teacher.module.css";

function ViewResult1() {
  const [roll, setRoll] = useState("");
  // CHANGED: Initialize as an empty string ""
  const [class1, setClass1] = useState(""); // class select 
  const [exam, setExam] = useState(""); // exam select
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (!roll || !class1 || !exam) {
      alert("Please fill all fields");
      return;
    }

    try {
      const query = `class1=${class1}&roll=${roll}&exam=${exam}`;
      const res = await fetch(`https://result-in-v5o6-b7z4458ar-sivas-projects-f866c7af.vercel.app//api/results/search?${query}`);
      // NOTE: Handle non-200 responses to prevent data being set as null/undefined on error
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
              alert("Error fetching result");

      }
      
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Error fetching result:", err);
      // Clear result on error to avoid showing old data/loading state
      setResult(null); 
      alert("Error fetching result");
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className={Style1.main}>
          <h1 className={Style1.heading}>School Results</h1>
          <div className={Style1.input}>
            <div className={Style1.arrange}>
              <label>Roll no</label>
              <input
                className={Style1.input1}
                type="text"
                placeholder="enter the roll no"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
              />
            </div>
 
<div className={Style1.input1}>
            <label>Class:</label>git
            <select name="class1" value={class1}                  onChange={(e) => setClass1(e.target.value)}
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
          </div> </div> 
       <div className={Style1.newi}>

             <div className={Style1.input1}>
                        <label>Exam:</label>
                        <select name="exam" value={exam}                 onChange={(e) => setExam(e.target.value)}
>  <option value="">-- Select an Exam --</option>
              <option value="FA-1">FA-1</option>
              <option value="FA-2">FA-2</option>
              <option value="SA-1">SA-1</option>
 <option value="FA-3">FA-3</option>
              <option value="FA-4">FA-4</option>
              <option value="SA-2">SA-2</option>   
                        </select>
                      </div>
            <button className={Style1.submit} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        

          {/* Display result */}
          {result && result.length > 0 && (
            <div className= {Style2.inpute1}>
              <h3 className={Style2.heading}>Result:</h3>{
              result.map((r, index) => (
                <div key={index}>
             
             <div className={Style1.details}>
              <h1>Roll No:{r.roll}</h1>
             
              <h1>Class:{r.class1}</h1>
           
              <h1>exam:{r.exam}</h1> </div> </div> ))}
              <table className={Style1.table}>
                <thead>
                  <tr>
                   
                    <th>Subject</th>
                    <th >Marks</th>
                    
                  </tr>
                </thead> {result.map((r, index) => (
                <tbody key={index}>
                 
                    <tr  >
                      <td className={Style1.td}>Telugu</td>
                      <td className={Style1.td}>{r.telugu}</td>
                      
                    </tr>
                     <tr  >
                      <td className={Style1.td}>Hindi</td>
                      <td className={Style1.td}>{r.hindi}</td>
                      
                    </tr><tr  >
                      <td  className={Style1.td}>English</td>
                      <td className={Style1.td}>{r.english}</td>
                      
                    </tr>
                    <tr  >
                      <td  className={Style1.td}>Maths</td>
                      <td className={Style1.td}>{r.maths}</td>
                      
                    </tr><tr  >
                      <td className={Style1.td} >Science</td>
                      <td className={Style1.td}>{r.science}</td>
                      
                    </tr>
<tr  >
                      <td  className={Style1.td}>Social</td>
                      <td className={Style1.td}>{r.social}</td>
                      
                    </tr>
                <tr>
  <td className={Style1.td}>Total</td>
  <td className={Style1.td}>
    {
      (Number(r.social || 0) +
       Number(r.telugu || 0) +
       Number(r.hindi || 0) +
       Number(r.english || 0) +
       Number(r.maths || 0) +
       Number(r.science || 0))
    }
  </td>
</tr>

                </tbody>))}
              </table> 
            </div>
          )}                    

          {result && result.length === 0 && <p>No result found</p>}
        </div>
      </div>
    </>
  );
}

export default ViewResult1;