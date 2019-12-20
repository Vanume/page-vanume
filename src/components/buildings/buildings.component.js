import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import './buildings.styles.scss';



const Buildings = ({url}) => {

    const gltf = useLoader(GLTFLoader, url)
    return <primitive object={gltf.scene} position={[-15, 33, -150]} rotation={[-5.7, 1.6, 0]} />
}

export default Buildings;