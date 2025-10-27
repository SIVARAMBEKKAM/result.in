import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import Teachernav from './teachernav.js';
import Style1 from'./teacherdashboard.module.css';

function Teacherdashboard(){
          const navigate = useNavigate();
    return (<>
    <Teachernav/>
     <div className={Style1.body}><div className={Style1.heading}>
        Welcome</div>
        
        <div className={Style1.div}>
        <div className={Style1.div1}>
            <div className={Style1.content}>
                  <div className={Style1.content_heading}>
                    View Students List

                </div>
                <div className={Style1.content_message}>
Access a comprehensive list of all your students enrolled in your courses.
                </div>
                <button onClick={()=>navigate('/Viewstudent')}>
                    view
                </button>
                </div>
                <div className={Style1.image}>
                    <img src="tim1.png "></img></div></div> 
                     <div className={Style1.div1}>
            <div className={Style1.content}>
                <div className={Style1.content_heading}>
                    Add and Delete Students

                </div>
                <div className={Style1.content_message}>
                    Manage your class roster by adding new students or removing students who have left.

                </div>
                <button>
                    Mange
                </button>
                </div>
                <div className={Style1.image}>
                    <img src="tim2.png "></img></div></div>  <div className={Style1.div1}>
            <div className={Style1.content}>
                  <div className={Style1.content_heading}>
Enter Results
                </div>
                <div className={Style1.content_message}>
                    Input and submit student results for various assessments and exams.

                </div>
                <button onClick={() => navigate('/Addresult')}>
                    Enter
                </button>
                </div>
                <div className={Style1.image}>
                    <img src="tim3.png"></img></div></div>  <div className={Style1.div1}>
            <div className={Style1.content}>
                  <div className={Style1.content_heading}>
View/Edit Results
                </div>
                <div className={Style1.content_message}>
                    Review and make necessary adjustments to previously entered student results.

                </div>
                <button onClick={() => navigate('/Editreult')}>
                View/Edit
                </button>
                </div>
                <div className={Style1.image}>
                    <img src="tim4.png "></img></div></div></div>
                    </div>
    </>)
}
export default Teacherdashboard;