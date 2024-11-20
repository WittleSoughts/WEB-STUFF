import { Canvas } from '@react-three/fiber'
import Experience from './components/three/Experience'

export default function App() {
    return <>
        <div className="fixed top-0 left-0 w-full h-full m-0 p-0 font-orbit uppercase">
            <div className='fixed top-0 left-0 w-full h-full overflow-hidden z-10'>
                <Canvas>
                    <Experience />
                </Canvas>
            </div>
        </div>
    </>
}