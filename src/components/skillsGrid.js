import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const SkillsGrid = ({ skills }) => {
    return (
      <section className="skills-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <img
            src={skill.icon}  // Directly use the URL of the SVG
            alt={skill.altText || skill.title}
            className="h-20 w-auto mb-4"
          />
            <h3 className="text-xl text-cyan-500">{skill.title}</h3>
            <ul className="font-thin text-slate-500 leading-7">
              {skill.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  };
  

export default SkillsGrid
