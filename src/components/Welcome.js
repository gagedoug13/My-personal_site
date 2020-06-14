import React from 'react'


export default function Main() {
    return (
        <div className="welcome">
            <div className='welcomeDiv'>
                <img className="profilePic" alt="profile pic" src="https://media3.giphy.com/media/BfFQeCJSNJcM8/source.gif"></img>
                <h1 className="myName">Hello, my name is Gage Thornberry.</h1>
                <h2 className="myTitle">I'm a Full-Stack Web Developer and Musician.</h2>
                <div className='welcomeButtonDiv'>
                   
                    <button className='welcomeButtons'>Projects</button>
                    <button className='welcomeButtons'>Resume</button>
                    <button className='welcomeButtons'>Contact</button>
        
               </div>
            </div>
        </div>
    )
}
