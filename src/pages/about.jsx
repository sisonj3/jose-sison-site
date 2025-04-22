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
                <a href="https://drive.google.com/file/d/138lc0DMG8xH6Ih0mDE89AgiqvoZfDtVu/view?usp=sharing">Resume</a>
            </main>

            <footer>
                <h2>Contact Me</h2>
                <p>Email: joseaurelio.sison@alumni.unlv.edu</p>
                <a href="https://github.com/sisonj3">GitHub</a>
                <a href="https://www.linkedin.com/in/jose-aurelio-sison-34379326b/">LinkedIn</a>
            </footer>
        </>
    )
}