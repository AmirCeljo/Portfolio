import React from 'react';
import { Link } from 'react-router-dom';
import './mainpage.css';


const MainPage = () => {
  return (
    <div className='mainpage'>
        <div className='mainpage-content'>
            <div className='content'>
                <span>Build your product with application development specialist.</span>
                <p>I am an upcoming talent with solid knowledge and strong foundation in software development. </p>
                <Link to='/'>Lets work together</Link>
            </div>
            <div className='portfolio-img'>
                {/* <div className="graph"></div> */}
                <div className='img'></div>
            </div>
        </div>
    </div>
  )
}


export default MainPage
