import React from 'react'


export default function Main() {
    return (
        <div className="welcome">
            <div>
                <img className="profilePic" src="blackBackgroundPicture.jpg"></img>
                <h1 className="myName">Hello, my name is Gage Thornberry.</h1>
                <h2 className="myTitle">I'm a Full-Stack Software Engineer.</h2>
                <button className = "welcomeButton">About Me</button>
                <button className="welcomeButton">View My Projects</button>
            </div>
        </div>
    )
}
