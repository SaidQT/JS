import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const { link, content, routee } = props;
    return (
        <>
            <h1>Favorite Authors</h1>
            <p><Link to={routee}>
                {link}
            </Link></p>
           <p style= {{ color: "purple" }}> {content}</p>
        </>
    )
}

export default Header