import React from 'react'
import './brief.css'
import {FaReact,FaJava, FaSass, FaLess} from 'react-icons/fa'
// import {SiCsharp} from 'react-icons/si'
import {BiLogoFlutter} from 'react-icons/bi'

const Brief = () => {

    const brief = [
        {class:'code-quality',innerclass:'codeq-package', heading: 'Design',
        p:"Im probably not the best designer, or the one just sitting behind an artboard and adding details to the canvas, but I design. Keeping an eye on font sizes and minimal details on a pages is what I do. I'm commited to build friendly user experiences while staying fashionable.",
    },
        {class:'software-development',innerclass:'softwared-package', heading: 'Engineering',
        p:"When it comes to building applications that function in specific way, Im equipped with just the right tools. Mostly you know me as a developer who likes to build web applications, but there is no limit for me when it comes to expanding the horizons to more objective and core programming."}
    ]

  return (
    <div className='brief-content'>

        {brief.map((item,index) => (
            <div className={item.class}>
                {index === 1 ? <div className='decoration-img'></div> : ''}
                <div className={item.innerclass}>
                    <h1>{item.heading}</h1>
                    <p>{item.p}</p>
                    {index === 0 ? <div><FaSass/><FaLess/></div> : <div><FaReact/>
                    
                    <BiLogoFlutter/>
                    <FaJava/></div>}
                </div>
            </div>
        ) )}

     
    </div>
  )
}

export default Brief
