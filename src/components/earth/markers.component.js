import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

import url3 from '../../static/images/earthmap1k.jpg';
import url2 from '../../static/images/earthspec1k.jpg';
import url1 from '../../static/images/earthbump1k.jpg';

function calcPosFromLatLonRad(lat,lon,radius){
	
	var phi   = (90-lat)*(Math.PI/180);
	var theta = (lon+180)*(Math.PI/180);
	
	let x = -((radius) * Math.sin(phi)*Math.cos(theta));
	let z = ((radius) * Math.sin(phi)*Math.sin(theta));
	let y = ((radius) * Math.cos(phi));
		
		
		console.log([x,y,z]);
	   return [x,y,z];
	}

let position = calcPosFromLatLonRad(18.501636, -98.754990, 2);

const Markers = () => {
	const ref = useRef();
    const [bumpMap, specMap, normalMap] = useLoader(TextureLoader, [url1, url2, url3]);
	
    return (
        
        <mesh 
		ref={ref} 
		position={[position[0], position[1], position[2]]}
		onPointerOver={e => console.log('over')}
		onPointerOut={e => console.log('out')}>
			<sphereGeometry attach='geometry' args={[.1, 12, 12]}/>
			<meshStandardMaterial attach='material' map={normalMap}/>
		</mesh>
      
    )
}

export default Markers;