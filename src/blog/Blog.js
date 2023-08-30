import React from 'react'
import './blog.css'
import { Link } from 'react-router-dom'

const Blog = () => {
    const content = [
        {link:'',date:'22.11.2022',heading:'Application performance', paragraph:'No doubt, there are a lot of reasons why websites are slow, some of which are case-specific. I like to look at theese factors from two perspectives.'},
        {link:'',date:'23.04.2023',heading:'Less really can be more, while coding',
        paragraph:'Sure, we know how to code. But how structured is our code ? For example, we should be aware that repetition of same block of code or nested if else conditions can be messy and hard to debug later. Lets try to write less code but do more work.'
    }
        
    ]
    return (
        <div className='blog'>
            <h1 className='blog-h uppercase'>Blog</h1>
            <h1 className='articles'>My Articles.</h1>
            <div className='blog-content'>
                {content.map(item => (
                    <Link to={item.link}>
                        <div>
                        <p>{item.date}</p>
                            <h1 className='blog-h content'>{item.heading}</h1>
                            <p>{item.paragraph}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blog
