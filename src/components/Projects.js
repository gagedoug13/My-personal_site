import React from 'react'

export default function Projects() {
    return (
        <div className="projects">
            <div className='projectsTitleDiv'>
                <h1 className='projectsTitle'>Projects</h1>
            </div>
                
                <div className='logicDiv'>
                    <div>
                        <img className='projectPictures' src='../rearden-logic.png'></img>
                        <h1 className='projectText'>
                            Rearden Logic LLC - Website made for Rearden Logic using WordPress and MuffinBuilder.
                        </h1>
                    </div>
                </div>

                <div className='jamzDiv'>
                    <div>
                        <img className='projectPictures' src='../neighborhood-jamz.png'></img>
                        <h1 className='projectText'>
                            Neighborhood Jamz - Find concerts near you by setting a location and a date.
                        </h1>
                    </div>
                </div>


                <div className='lineDiv'>
                    <div>
                        <img className='projectPictures' src='../my-line.png'></img>
                        <h1 className='projectText'>
                            My Line - Find mountain biking trails near you.
                        </h1>
                        <p>This app utilizes the Google Maps API, Google News API and the MBT Project API.</p>
                    </div>
                </div>

        </div>
    )
}
