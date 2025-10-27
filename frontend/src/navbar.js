import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

import Style1 from './home.module.css'
function Navbar(){
      const navigate = useNavigate();

    const ViewResult=()=>{
        navigate('/ViewResult1');


    }
    const  Teacherlogin =()=>{
        navigate('/Teacherlogin1')
    }
    return(
        <>
        <div className={Style1.main}>
            <div  className={Style1.nav_bar}>
                <div className={Style1.logo}>
                    <img src="logo1.webp" width="50px" height="50px"/></div>    
                    <div className={Style1.nav_items}>
                        <div className={Style1.option1} onClick={() => navigate('/Teacherlogin1')}>Teacher login</div><div className={Style1.option2}  onClick={() => navigate('/ViewResult1')}> View Results</div></div>  </div>      </div>
              </>    );   
                  }
                export default Navbar;