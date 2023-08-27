import React from 'react'
import './work.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const Work = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  const work = [
    {class:'forspace scale',classColor:'gradient',subheadingwork:'design UI and deploy',projectname:'Forspace Solutions Website',
  link:'https://forspace.ba'},
    {class:'asa scale',classColor:'yellow',subheadingwork:'Design UI and deploy',projectname:'Asa Šped Website',
  link:'https://asa-sped.ba'},
    {class:'coffee scale',classColor:'green'},
    {class:'agency scale',classColor:'gradient'},
    {class:'lambo scale',classColor:'yellow'}
    
  ]

  return (
    <div className='projects'>
        <h1 className='results'>Projects</h1>
        <h1 className='my-results'>My Results.</h1>
        <div className="result-grid">
          {work.map(item => (
            <div>
          <div className={`grid-item ${item.classColor}`}>
            <div className={item.class}></div>
          </div>
          <div className='guide'>
          <h3>{item.subheadingwork}</h3>
          <h1>{item.projectname}</h1>
          <Link to={item.link} target='_blank'>View project <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow"><path fill="none" stroke="#4831d4" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg></Link>
          </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Work
