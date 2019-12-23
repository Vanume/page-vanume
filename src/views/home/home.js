import React, {Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import $ from "jquery";

import Background from '../../components/background/background.component';
import Earth from '../../components/earth/earth.component';
import Clouds from '../../components/earth/clouds.component';
import Buildings from '../../components/buildings/buildings.component';
import Magazine from '../../components/magazine/magazine.component';

import './home.styles.scss';

const options = {
    width: 800,
    height: 600,
    autoCenter: true,
    display: "double",
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    when: {
      turned: function(e, page) {
        console.log("Current view: ", $(this).turn("view"));
      }
    }
  };
  
  const pages = [
    "./catalogo/CATÁLOGO SM_Página_01.jpg",
    "./catalogo/CATÁLOGO SM_Página_02.jpg",
    "./catalogo/CATÁLOGO SM_Página_03.jpg",
    "./catalogo/CATÁLOGO SM_Página_04.jpg",
    "./catalogo/CATÁLOGO SM_Página_05.jpg",
    "./catalogo/CATÁLOGO SM_Página_06.jpg",
    "./catalogo/CATÁLOGO SM_Página_07.jpg",
    "./catalogo/CATÁLOGO SM_Página_08.jpg",
    "./catalogo/CATÁLOGO SM_Página_09.jpg",
    "./catalogo/CATÁLOGO SM_Página_10.jpg",
    "./catalogo/CATÁLOGO SM_Página_11.jpg",
    "./catalogo/CATÁLOGO SM_Página_12.jpg",
    "./catalogo/CATÁLOGO SM_Página_13.jpg",
    "./catalogo/CATÁLOGO SM_Página_14.jpg",
    "./catalogo/CATÁLOGO SM_Página_15.jpg",
    "./catalogo/CATÁLOGO SM_Página_16.jpg",
    "./catalogo/CATÁLOGO SM_Página_17.jpg",
    "./catalogo/CATÁLOGO SM_Página_18.jpg",
    "./catalogo/CATÁLOGO SM_Página_19.jpg",
    "./catalogo/CATÁLOGO SM_Página_20.jpg"
  ];

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
                <Clouds/>
            </Suspense> 
            <pointLight intensity={2} position={[10, 10, 10]} />
            <spotLight intensity={.3} position={[-10, -10, -10]}/>
        </Canvas>
        <Canvas camera={{position: [0, 0, 10]}} >    
            <fog attach="fog" args={['black', 1, 180]} />
            <Suspense fallback={null}>
                <Buildings url="/buildingFinal4.gltf" />
            </Suspense>
            <pointLight intensity={1} position={[20, 20, -20]} color="#38CDDC" />
        </Canvas>
        <Magazine options={options} className="magazine">
        {pages.map((page, index) => (
            <div key={index} className="page">
            <img src={page} alt="" />
            </div>
        ))}
        </Magazine>
        </>
    )
}

export default Home;