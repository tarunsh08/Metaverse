import React, { useState, useEffect } from 'react';
import './MarioMetaverse.css';

// --- ASSETS ---
// Using image URLs for simplicity. You can also download these and import them locally.
const marioSprite = '/mario.png';
const pipeSprite = '/pipe.png';
const brickBlock = '/brick.png';
const questionBlock = '/question.png';
const background = '/download.png';

const MarioMetaverse = () => {
    // State to hold the avatar's position {x, y}
    const [position, setPosition] = useState({ x: 50, y: 300 });

    // Constants for movement and boundaries
    const speed = 15; // Pixels per key press
    const avatarSize = { width: 50, height: 70 };
    const gameBounds = { width: 800, height: 500 };

    // Effect hook to handle keyboard input
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Use the functional form of setState to get the latest state
            setPosition(prevPosition => {
                let newX = prevPosition.x;
                let newY = prevPosition.y;

                switch (e.key) {
                    case 'ArrowUp':
                        newY = Math.max(0, prevPosition.y - speed);
                        break;
                    case 'ArrowDown':
                        newY = Math.min(gameBounds.height - avatarSize.height, prevPosition.y + speed);
                        break;
                    case 'ArrowLeft':
                        newX = Math.max(0, prevPosition.x - speed);
                        break;
                    case 'ArrowRight':
                        newX = Math.min(gameBounds.width - avatarSize.width, prevPosition.x + speed);
                        break;
                    default:
                        return prevPosition; // No change if other key is pressed
                }
                return { x: newX, y: newY };
            });
        };

        // Add event listener when the component mounts
        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="metaverse-container-wrapper">
            <h1>Mario's 2D World 🍄</h1>
            <div className="game-container" style={{ backgroundImage: `url(${background})` }}>
                {/* Mario Avatar */}
                <div
                    className="mario-avatar"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        backgroundImage: `url(${marioSprite})`
                    }}
                ></div>

                {/* Scenery Elements */}
                <div className="pipe" style={{ backgroundImage: `url(${pipeSprite})` }}></div>
                <img src={brickBlock} className="block" style={{ left: '200px', top: '220px' }} alt="Brick Block" />
                <img src={questionBlock} className="block" style={{ left: '255px', top: '220px' }} alt="Question Block" />
                <img src={brickBlock} className="block" style={{ left: '310px', top: '220px' }} alt="Brick Block" />
            </div>
            <div className="controls-info">
                <strong>Controls:</strong> Use Arrow Keys (↑, ↓, ←, →) to Move
            </div>
        </div>
    );
};

export default MarioMetaverse;