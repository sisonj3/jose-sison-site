import { useState, useEffect } from 'react';
import NavBar from '../components/navigation';

export default function Home() {
    
    useEffect(() => {
        document.title = 'Jose Aurelio L. Sison';
    }, []);

    return (
        <>
            <NavBar />

            <main>
                <h2>Software Developer - Full Stack</h2>

                <div>
                    <h3>Projects</h3>

                    <div>
                        <h4><a href="https://zzz-planner.onrender.com/login">Zenless Zone Zero Upgrade Planner</a></h4>

                        <img src={null} alt="Screenshot" />

                        <p>Brief site description</p>

                        <div>
                            <a href="https://github.com/sisonj3/zzz-planner-client.git">Front End Repository</a>
                            <a href="https://github.com/sisonj3/zzz-planner-api.git">Back End Repository</a>
                        </div>
                    </div>
                </div>
                
            </main>
            
        </>
    )
}