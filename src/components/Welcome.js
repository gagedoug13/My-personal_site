import React from 'react'


export default function Main() {
    return (
        <div className="welcome">
            <div>
                <img className="profilePic" alt="profile pic" src="https://media3.giphy.com/media/BfFQeCJSNJcM8/source.gif"></img>
                <h1 className="myName">Hello, my name is Gage Thornberry.</h1>
                <h2 className="myTitle">I'm a Full-Stack Software Engineer.</h2>
               <div className='welcomeButtonDiv'>
                   <ul>
                       <button className='projectsButton'>Projects</button>
                       <button className='resumeButton'>Resume</button>
                       <button className='contactsButton'>Contact</button>
                   </ul>
               </div>
            </div>
        </div>
    )
}
