import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
const About = () => {

  const content = [
    {class:'work', heading:`I build &`,heading2:'design stuff', p:'Open source projects, web apps and experimentals.'},
    {class:'write', heading:'I write,',heading2:'sometimes', p:'About code quality, development, learning and life.'}
  
  ]

  const navigate = useNavigate();

  return (
    <div className='about-content'>
      <div className="text-content">
        {content.map((item,index) => (
        <div className={item.class}>
          <div>
            <h1>{item.heading} <br/> {item.heading2}</h1>
            <p>{item.p}</p>
            {index === 0 ?<button onClick={() => navigate('Portfolio/work')}>See my work <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow"><path fill="none" stroke="#4831d4" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg></button> :
            <button onClick={() => navigate('Portfolio/write')}>Read my articles <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow"><path fill="none" stroke="#4831d4" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg></button>
            }
           </div>
        </div>))}
        
      </div>
    </div>
  )
}

export default About
