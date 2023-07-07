import React, { useEffect, useRef } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

const AlanAi = () => {
    const alanBtnRef = useRef({}).current;
    useEffect(() => {
        alanBtnRef.btnInstance= alanBtn({
            key: 'eb05b0d3608da8151d2992dfc7c9f9252e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command, text}) => {
                if (command === 'textToSpeech') {
                    // Call the client code that will react to the received command
                    textToSpeech(text);
                }
            }
        });
    }, []);

    // function to handle text-to-speech
    const textToSpeech = (text) => {
        // Use a text-to-speech library of your choice to convert text to speech
        // For example, you can use the Web Speech API
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
      };

    return (
        <div>
            <button className='bg-blue-700 text-white rounded-md m-5 p-1 justify-center' onClick={() => {
        alanBtnRef.btnInstance.playText("Hi there, I am Alan");
      }}>Play Sound</button>

        </div>
    )
}

export default AlanAi;