import React, { useRef, useFrame } from 'react';
import { useUpdate } from 'react-three-fiber';
import * as THREE from 'three';

function LinePath(props) {
	const ref = useRef();
	// useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += .01));
	const vertices = React.useMemo(() => {
		const path = new THREE.Path()
		const firstPoint = props.vertices[0]

		path.moveTo(firstPoint.x, firstPoint.y)
		props.vertices.forEach(point => path.lineTo(point.x, point.y))
		path.closePath()

		return path.getPoints()
	}, [props.vertices]);

	const refer = useUpdate(geometry => {
    geometry.setFromPoints(vertices)
  }, [])

  return (
    <line 
		onClick={e => console.log('click')}
		onPointerOver={e => console.log('hover')}
		onPointerOut={e => console.log('unhover')}
        ref={ref}
        rotation={[THREE.Math.degToRad(70), THREE.Math.degToRad(45), THREE.Math.degToRad(45)]}
		>
      <bufferGeometry attach="geometry" ref={refer} />
      <lineBasicMaterial attach="material" color="white" />
    </line>
  )
}

export default LinePath;