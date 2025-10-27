import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

import Style1 from './home.module.css';
function Home(){
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
                        <div className="option1" onClick={() => navigate('/Teacherlogin1')}> Teacher login</div><div className="option2"  onClick={() => navigate('/ViewResult1')}> View Results</div></div>        </div>
                        <div  className={Style1.body}>
                            <div >
                                <img src="main.png" width="928px" height="218px" className={Style1.main_img}/>
                                

                            </div>
                            <span className={Style1.main_content}> 
                                Acme High is dedicated to providing a supportive and challenging educational environment. Our commitment to excellence is reflected in our students' achievements and our faculty's dedication. Explore our results and see how we're shaping future leaders.
                            </span>
                            <div className={Style1.main_button}>
                            < button className={Style1.button1} onClick={ViewResult}> view results</button>
                                                        <button  className={Style1.button2} onClick={Teacherlogin}> Teacher login</button>

                            </div>
                            <div className={Style1.contact}>
                                <div className={Style1.contact1}>
                                    Contact Us
                                </div>   <div className={Style1.contact1}>
                                    Privacy policy
                                </div>   <div className={Style1.contact1}>
Term and Services                                </div>
                            </div>
                            <span className={Style1.footer}>
                                @2025 Acme High. All rights reserved.
                            </span>
                        </div>


        </div>
        </>
    );
}
export default Home;