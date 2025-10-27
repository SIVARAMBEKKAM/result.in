import React from "react";
import Style1 from'./teachernav.module.css';
import { useNavigate } from 'react-router-dom';
function Teachernav(){
          const navigate = useNavigate();
    return (
    <>
        <div className={Style1.main}>
            <div  className={Style1.nav_bar}>
                <div className={Style1.logo}>
                    <img src="logo1.webp" width="50px" height="50px"/></div>    
                    <div className={Style1.nav_items}>
                        <div className={Style1.option1} onClick={() => navigate('/Viewstudent')}>View students</div><div className={Style1.option2}  onClick={() => navigate('/Addresult')}>  Add results</div>                        <div className={Style1.option1} onClick={() => navigate('/Editreult')} >Edit  Results</div>                        <div className={Style1.option1} onClick={() => navigate('/Add_delete')}>ADD students</div> <div className={Style1.option1} onClick={() => navigate('/')}>Logout</div></div>  </div>      </div>
              </>    );   
                  }
                export default Teachernav;