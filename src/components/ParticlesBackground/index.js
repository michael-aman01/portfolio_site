import React, { useCallback, useEffect } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import image from "./image.svg"
export default function ParticlesBackground(){
    const particlesInit = useCallback(async engine => {
        console.log(engine);
     
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
    return (
        <>
            <div id="particles-container">
            <Particles
        loaded={particlesLoaded}
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": false,
            "zIndex": 1
        },
        "particles": {
            "number": {
                "value": 70,
                "density": {
                    "enable": false,
                    "value_area": 800
                }

            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "polygon",
            
            },
            "repulse": {
                "distance": 500,
                "duration": 0.5
              },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            },
            "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },

        },
    },
 
        "retina_detect": true,
        "background": {
            "color": "#111",
      
        }
    }}/>
            </div>
        </>
    )
}