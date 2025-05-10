import { useState, useEffect } from 'react';
import NavBar from '../components/navigation';
import "../styles/home.css";

export default function Home() {
    
    useEffect(() => {
        document.title = 'Jose Aurelio L. Sison';
    }, []);

    return (
        <>
            <NavBar />

            <main>
                <div className='centered-text'>
                    <h2>Software Developer - Full Stack</h2>
                    <p>Always move forward. Never stop learning.</p>
                </div>
                
                <div>
                    <h3 className='centered-text'>Projects</h3>

                    <div className='zzz_planner centered-text margin_em'>
                        <h4><a href="https://zzz-planner.onrender.com/login">Zenless Zone Zero Progress Planner</a></h4>

                        <div className='zzz_sc'>
                            <img src="/zzz-planner-agents.png" alt="Screenshot" />
                            <img src="/zzz-planner-agents-settings.png" alt="Screenshot" />
                            <img src="/zzz-planner-loadouts.png" alt="Screenshot" />
                            <img src="/zzz-planner-inventory.png" alt="Screenshot" />
                        </div>
                        
                        <p>Progress planner for the game Zenless Zone Zero. Stay organized while progressing through the game.</p>

                        <div className='repos'>
                            <a href="https://github.com/sisonj3/zzz-planner-client.git">Front End Repository</a>
                            <a href="https://github.com/sisonj3/zzz-planner-api.git">Back End Repository</a>
                        </div>
                    </div>
                </div>
                
            </main>
            
        </>
    )
}