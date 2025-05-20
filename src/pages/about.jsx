import { useState, useEffect } from 'react'
import NavBar from '../components/navigation';
import '../styles/about.css';

export default function Home() {
    
    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        <>
            <NavBar />

            <main>
                <div className='margin_em'>
                    <h2>Software Developer that's always learning and creating</h2>
                    <p>
                        I like to build projects from the ground up. Experiencing new challenges is merely a part of the learning process.
                        Anything can be created, it's just a matter of how.
                    </p>
                    <p>
                        I'm Jose, a Computer Science graduate from the University of Nevada, Las Vegas.
                        I first began programming in 2014-2015 during my sophomore year in the Video Game Design
                        program at Southwest Career and Technical Academy. I've kept on learning and improving my abilities since then.
                        I'm always pushing myself to be better whether it's mentally with programming or physically in the gym.
                    </p>
                </div>

                <div className='accolades centered-text'>
                    <h3>Accolades</h3>
                    
                    <div>
                        <h4>Fred & Harriet Cox Senior Design Competition</h4>
                        <h5>Video Game for Students with Disabilities</h5>

                        <div className='flex_gap justify_center'>
                            <div>
                                <img src="/1stPlace.jpg" alt="1st Place Award" />
                                <p>1st Place</p>
                            </div>
                            
                            <div>
                                <img src="/SustainabilityAward.jpg" alt="Sustainability Award" /> 
                                <p>Sustainability Award</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </main>

            <footer className='centered-text'>
                <h2>Contact Me</h2>
                <p>Email: joseaurelio.sison@alumni.unlv.edu</p>

                <div className='flex_gap justify_center'>
                    <a href="https://github.com/sisonj3">GitHub</a>
                    <a href="https://www.linkedin.com/in/jose-aurelio-sison-34379326b/">LinkedIn</a>
                    <a href="https://drive.google.com/file/d/1HWqLyTf5oVfz-iFrDUCPOdikYGZElZTd/view?usp=sharing">Resume</a>
                </div>
                
            </footer>
        </>
    )
}