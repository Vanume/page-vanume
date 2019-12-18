import React from 'react';

import Particles from 'react-particles-js';

const Background = () => {



    return (
        <>
            <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 150
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    }
                }
            }} />
        </>
    )
}
export default Background;