import React, {Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three'

import Background from '../../components/background/background.component';
import Earth from '../../components/earth/earth.component';

import './home.styles.scss'

const Home = () => {
    return (
        <>
        <p>HOME</p>
        <Background/>
        <Canvas camera={{ position: [0, 0, 10], fov: 40, far: 10000 }} 
         onCreated={({ gl }) => {
            gl.gammaInput = true
            gl.toneMapping = THREE.ACESFilmicToneMapping
          }} >
        <Suspense fallback={null}>
            <Earth />
        </Suspense> 
                <pointLight intensity={3} position={[10, 10, 10]} />
        </Canvas>
        </>
    )
}

export default Home;