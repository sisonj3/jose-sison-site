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
                
            </main>
        </>
    )
}