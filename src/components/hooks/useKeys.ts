import { useState, useEffect } from 'react';

export const useWord = (onEnter: ()=>void) => {
    const [word, setWord] = useState('');

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const { key, altKey, ctrlKey, metaKey } = event;
            if (altKey || ctrlKey || metaKey)  {
                return; // ignore special keys
            }
            if (key === 'Backspace' && word.length > 0) {
                setWord((prevWord) => prevWord.slice(0, -1));
            }
            if(key === 'Enter' && word.length === 5){
                onEnter();
                setWord('');
            }
            else if (/[a-zA-Z]/.test(key) && word.length <=5 && key !== 'Backspace') {
                setWord((prevWord) => prevWord + key);
            }
        };

        const handleKeyUp = () => {
            if (word.length === 5) {
                console.log('Word entered:', word);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [word, onEnter]);

    return word;
};

