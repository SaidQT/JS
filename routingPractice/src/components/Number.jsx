import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const { number, color, background } = useParams()
    
    return (
        <div>
            {isNaN(number) ? (
                <p style={{ color: color || "black", background: background }}>The word is {number}</p>
                
            ) : (
                <p>The number is {number}</p>
            )}
        </div>
    )
}

export default Number
