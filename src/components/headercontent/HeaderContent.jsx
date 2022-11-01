import React from 'react'
import './headercontent.css'

function HeaderContent() {
  return (
    <div className='container'>

        <div className='headerContent-container'>
            <div className='contentData'>
                <div className='contentHeading'>
                <h2>
                Search engines use links to crawl the web
                </h2></div>
                <div className='content-para'>
                <p>
                They will crawl the links between the individual pages on your website, and they will crawl the links between entire websites
                </p>
                </div>
                <div className='contentheadBut'><button>Learn More</button></div>
            </div>
            <div className='contentBox'>
                <div className='contentBoxData'>
                <p className='contentSignUp'>
                Sign Up Now
                </p>
                <div className='contentInput'>
                    <input placeholder='Your Email'/>
                    <input placeholder='Your Email'/>
                    <input placeholder='Your Email'/>

                </div>
                <div className='contentCheck'>
                    <input type='checkbox'/>
                    
                    <p>I agree to the Terms of Service.</p>
                </div>
                <div className='contentBottom'>
                    <div className='contentBut'>
                    <button>Sign in</button></div>
                    <div className='contentOr'>
                        <div className='orLine1'></div>
                        <p>or</p>
                        <div className='orLine2'></div>
                    </div>
                    <div className='contentBut2'>
                    <button>Sign in</button></div>
                </div>
                <div className='haveAccount'>
                <p className='havep1'>Do you have an Account?</p>
                <p className='havep2'>Sign in</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderContent