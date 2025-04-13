import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-primary/50"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-text-secondary mb-4">{project.description[0]}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-text-secondary">{project.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};