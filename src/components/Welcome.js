import React from 'react'
import picture from '../profilePicture.PNG'

export default function Main() {
    return (
        <div className="welcome">
            <div className='welcomeDiv'>
                <img className="profilePic" alt="profile pic" src={picture}></img>
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
