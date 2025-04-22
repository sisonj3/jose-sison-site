import { useState, useEffect } from 'react'
import NavBar from '../components/navigation';

export default function Home() {
    
    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        <>
            <NavBar />

            <main>
                <div>About Me</div>
                <div>Professional Summary</div>
                <div>Accolades</div>
                <div>Resume</div>
            </main>

            <footer>
                <h2>Contact Me</h2>
                <p>Email: joseaurelio.sison@alumni.unlv.edu</p>
                <a href="">Git Hub</a>
                <a href="">Linked In</a>
            </footer>
        </>
    )
}