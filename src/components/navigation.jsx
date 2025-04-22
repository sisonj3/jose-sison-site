import { useNavigate } from "react-router";
import { useRef } from "react";
import CustomLink from './CustomLink';


export default function NavBar() {

    return (
        <>
            <nav>
                <CustomLink goTo={'/'} name={'Jose Aurelio L. Sison'} />
                <CustomLink goTo={'/about'} name={'About'} />
            </nav>
        </>
    );

}