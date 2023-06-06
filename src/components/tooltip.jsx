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
                className=' absolute top-0  rounded hover:translate-x-[50%]
                hover:z-40 hover:bg-slate-900/80 text-white p-1 w-auto h-auto '
            > {text} </div>}

        </div>
    )
}

export default Tooltip