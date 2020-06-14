import React from 'react'

export default function Projects() {
    return (
        <div className="projects">
            <div className='projectsTitleDiv'>
                <h1 className='projectsTitle'>Projects</h1>
            </div>
                
                <div className='logicDiv'>
                    <div>
                        <a href='https://www.reardenlogic.com/'>
                        <img className='projectPictures' alt='reardenLogic didnt make it' src='../rearden-logic.png'></img></a>
                        <h1 className='projectText'>
                            Rearden Logic LLC - Website made for Rearden Logic using WordPress and MuffinBuilder.
                        </h1>
                        <p className='projectText2'>Implemented features including click to scroll, video background and mobile compatibility.</p>
                    </div>
                </div>

                <div className='jamzDiv'>
                    <div>
                        <a href='https://neighborhood-jamz.herokuapp.com/'>
                        <img className='projectPictures' alt='neighborhood jamz didnt make it' src='../neighborhood-jamz.png'></img></a>
                        <h1 className='projectText'>
                            Neighborhood Jamz - Find concerts near you by setting a location and a date.
                        </h1>
                        <p className='projectText2'>This app utilizes Geolocation, Google Places API and Songkick Events API .</p>
                    </div>
                </div>


                <div className='lineDiv'>
                    <div>
                        <img className='projectPictures' alt='myLine didnt make it' src='../my-line.png'></img>
                        <h1 className='projectText'>
                            My Line - Find mountain biking trails near you.
                        </h1>
                        <p className='projectText2'>This app utilizes the Google Maps API, Google News API and the MBT Project API.</p>
                    </div>
                </div>

        </div>
    )
}
