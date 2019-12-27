import React from 'react';

import Particles from 'react-particles-js';

import './background.styles.scss';

const Background = () => {



    return (
        <div className='background'>
            <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": true
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "images"
	            ],
	            "images": [
	                {
	                    "src": "/icons/Telephone Mast.png",
	                    "height": 20,
	                    "width": 23
	                },
	                {
	                    "src": "/icons/UAV.png",
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src": "/icons/Radar Site.png",
	                    "height": 20,
	                    "width": 20
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 10,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
        </div>
    )
}
export default Background;