import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Laptop } from "./3d/Laptop";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Ganta Indra Reddy</span>
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            Software Engineer specializing in building exceptional digital
            experiences
          </p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary rounded-full text-white font-medium"
            >
              <a href="#projects">View Projects</a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-primary rounded-full text-primary font-medium"
            >
              <a href="#contact">Contact Me</a>
            </motion.button>
          </div>
        </motion.div>
        <div className="h-[400px] lg:h-[600px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Laptop />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
