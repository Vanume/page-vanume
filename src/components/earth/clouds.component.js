import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

import url3 from '../../static/images/earthcloudmap.png';
import url2 from '../../static/images/earthcloudmaptrans.jpg';
import url1 from '../../static/images/earthlights1k.jpg';


const Clouds = () => {
    const refClouds = useRef();
    // const texture = useMemo(() => new THREE.ImageUtils.loadTexture(url3));
    // const bump = useMemo(() => new THREE.ImageUtils.loadTexture(url1));
    const [lights, mapTrans, clouds] = useLoader(TextureLoader, [url1, url2, url3]);
    useFrame(() => (refClouds.current.rotation.y += 0.0003))
    return (
        
      <mesh
        ref={refClouds}>
        <sphereGeometry attach="geometry" args={[2.05, 64, 64]} />
        <meshPhongMaterial attach='material' map={clouds}  opacity={.8} transparent={true} depthWrite={false} />    
      </mesh>
      
    )
}

export default Clouds;