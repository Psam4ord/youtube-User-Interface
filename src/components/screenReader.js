import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const Screenreader = () => {

    useEffect(() => {
        alanBtn({
            key: 'eb05b0d3608da8151d2992dfc7c9f9252e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command, text }) => {
                if (command === 'readText') {
                    // Call the function to read the received text
                    readText(text);
                }
            },
        });
    }, []);

    // Function to read text aloud
    const readText = (text) => {
        // Use a text-to-speech library or API of your choice to convert text to speech
        // For example, you can use the Web Speech API
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    };

    const handleReadText = () => {
        // Send a command to Alan AI to read the text
        window.AlanButton().playText('This is the text to be read.');
    };

    return (
        <div>
            <button className='bg-blue-700
              text-white rounded-md m-5 p-1
                justify-center'
                onClick={handleReadText}> Read-Tex
            </button>
        </div>

    )
}

export default Screenreader;

















