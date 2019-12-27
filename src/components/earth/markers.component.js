import React, { useState, useEffect ,useRef } from 'react';
import { useLoader, Dom } from 'react-three-fiber';
import * as THREE from 'three';

import url3 from '../../static/images/earthmap1k.jpg';
import url2 from '../../static/images/earthspec1k.jpg';
import url1 from '../../static/images/earthbump1k.jpg';

import Line from './line.component';

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
    const [bumpMap, specMap, normalMap] = useLoader(THREE.TextureLoader, [url1, url2, url3]);
	console.log(position)


	const [pos, setPos] = useState([position[0], position[1], position[2]])
	useEffect(() => {
		setPos([position[0], position[1], position[2]])
	}, [position])

	console.log(pos)
    return (
        
        <mesh 
		ref={ref} 
		position={[position[0], position[1], position[2]]}>
			<sphereGeometry attach='geometry' args={[.1, 12, 12]}/>
			<meshStandardMaterial attach='material' map={normalMap}/>
			<Line vertices={[new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 1, 0)]} />
			<Dom position={[position[0], position[1], position[2]]} >
				<div className="content" >
				Hello World!
				</div>
			</Dom>

		</mesh>
      
    )
}

export default Markers;