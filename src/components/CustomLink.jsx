import { Link, useLocation } from 'react-router';

export default function CustomLink({ goTo, name }) {
    
    const location = useLocation();

    if (location.pathname == goTo) {
        return ( <h1 className='current'>{name}</h1> );
    }

    return (
        <Link className='link' to={goTo}>{ name }</Link>
    );
}