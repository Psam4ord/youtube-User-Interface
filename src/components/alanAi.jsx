import React, { useEffect, useRef } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

const AlanAi = () => {
    const alanBtnRef = useRef({}).current;
    useEffect(() => {
        alanBtnRef.btnInstance= alanBtn({
            key: 'eb05b0d3608da8151d2992dfc7c9f9252e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'go:back') {
                    // Call the client code that will react to the received command
                    console.log("hey there")
                }
            }
        });
    }, []);

    return (
        <div>
             <button className='bg-blue-700 text-white rounded-md m-5 p-1' onClick={() => {
        alanBtnRef.btnInstance.playText("Hi there, I am Alan");
      }}>Play text</button>

        </div>
    )
}

export default AlanAi;