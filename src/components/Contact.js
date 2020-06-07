import React from 'react'

export default function Contact() {
    return (
        <div className="contact">
            <h1 className='contactMe'>How to contact me.</h1>
            <div className='contactInfoDiv'>
                <div className='contactBackground'>
                    <h1 className='contactText'>Phone: (405)708-2614</h1>
                </div>

                <div className='contactBackground'>
                    <h2 className='contactText'>Email: gagedoug13@gmail.com</h2>
                </div>

                <div className='contactBackground'>
                    <a href='https://github.com/gagedoug13' target='_blank' rel="noopener noreferrer"><h2 className='contactText'>Github: gagedoug13</h2></a>
                </div>

                <div className='contactBackground'>
                    <a href='https://www.linkedin.com/in/gage-thornberry-a32a9b168/' target='_blank' rel="noopener noreferrer"><h2 className='contactText'>LinkedIn: gagedoug13</h2></a>
                </div>
            </div>
        </div>
    )
}
