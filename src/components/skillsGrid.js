import React from 'react'

const SkillsGrid = ({ skills }) => {
    return (
      <section className="skills-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 my-20">
        {skills.map((skill) => {
          console.log(skill.icon); // Log the skill icon here
          return (
            <div key={skill.id} className="skill-item">
              <skill.icon className="h-20 w-auto mb-4 fill-current text-cyan-500" />
              
              <h3 className="text-xl text-cyan-500">{skill.title}</h3>
              <ul className="font-thin text-slate-500 leading-7">
                {skill.bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    );
  };
  
  
  export default SkillsGrid;