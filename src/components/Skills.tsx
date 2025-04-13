/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Layout, Server, Settings } from 'lucide-react';

const skillIcons: Record<string, any> = {
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Settings,
  web: Globe,
  languages: Code2,
};

const skillCategories = {
  languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  frontend: ['React', 'Redux', 'Bootstrap', 'Material UI', 'Tailwind CSS'],
  backend: ['NodeJS', 'Express'],
  database: ['MS SQL Server', 'MongoDB', 'Firebase'],
  tools: ['Git', 'Git Lab', 'CI/CD', 'SonarQube', 'Fossa', 'Postman'],
};

export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section py-20 bg-background/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Skills & Technologies
        </motion.h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skillCategories).map(([category, skills], index) => {
            const Icon = skillIcons[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  <h3 className="text-xl font-semibold capitalize">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};