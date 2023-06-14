import React, { useState } from 'react'

const Tooltip = ({ text, children }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >   
           {children}
            {isHovered && <div
                className=' absolute top-0  left-5 rounded hover:translate-y-[100%]
                hover:z-40 hover:bg-slate-900/80 text-white p-1 '
            > {text} </div>}

        </div>
    )
}

export default Tooltip