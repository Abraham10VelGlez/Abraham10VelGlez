import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, Line, Trail, Float, Sphere,Html  } from '@react-three/drei';

function Inicio() {

    return (
        <Canvas className='CanvasX' camera={{ position: [0, 0, 60], fov: 25 }} >
            <OrbitControls />

            <color attach="background" args={['#000']} />
            {/*background*/}
            <Environment preset='city' metalness={0} roughness={0} />
            <Stars saturation={0} count={800} speed={3} />
            <GizmoHelper alignment="botton-right" margin={[100, 100]} >
                <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" ></GizmoViewport>
            </GizmoHelper>
            <Html position={[-4, 10, 0]}>
                <App />
            </Html>

            <Model4 position={[0, 0, 0]}></Model4>



        </Canvas>
    );
}
export default Inicio