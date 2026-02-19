// src/components/ParticlesBackground.js
import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // if you are using the slim version



// Add this CSS to ensure the particles background has a lower z-index
const particlesStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -100,
};

// Wrap the Particles component with a div and apply the style
const ParticlesBackground = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <div style={particlesStyle}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "black", // White background color
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 40,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#800080", // Purple particles color
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#800080",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "bottom",
                            random: false,
                            straight: false,
                            outModes: {
                                default: "out",
                            },
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 600,
                            },
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 700,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 2, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default ParticlesBackground;