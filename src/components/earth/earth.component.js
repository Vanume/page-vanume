import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader, Dom } from 'react-three-fiber';
import * as THREE from 'three';

import Markers from './markers.component';

import url3 from '../../static/images/earthmap1k.jpg';
import url2 from '../../static/images/earthspec1k.jpg';
import url1 from '../../static/images/earthbump1k.jpg';

import './earth.styles.scss';

const Earth = () => {
	const ref = useRef();
    const [bumpMap, specMap, normalMap] = useLoader(THREE.TextureLoader, [url1, url2, url3]);
	useFrame(() => (ref.current.rotation.y -= 0.0005));
	
    return (
        
      <mesh
        ref={ref}>
        <sphereGeometry attach="geometry" args={[2, 64, 64]} />
        <meshPhongMaterial attach='material' map={normalMap} bumpMap={bumpMap} bumpScale={0.1} specularMap={specMap}  />   
	    	<Markers/>
        <Dom ref={ref} >
          <h1>Hola Mundo!</h1>
        </Dom>
      </mesh>
      
    )
}

export default Earth;