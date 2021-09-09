import React from "react";
import './basement.css';

const Basement = () => {

  const sections = [
    { 
      title : 'Main information',
      subsections : [
        {
          title : 'Creator',
          link : '/creator'
        },
        {
          title : 'Project history',
          link : '/history'
        },
        {
          titlt : 'favorite animals',
          link : '/animals'
        }
      ]
    },
    { 
      title : 'Main',
      subsections : [
        {
          title : 'reator',
          link : '/reator'
        },
        {
          title : 'Project istory',
          link : '/istory'
        }
      ]
    },
  ]

  return (
    <div className='basement'>
      {
        sections.map(section => (
          <div key={section.title} className='section'>
            <span className='section_title'>{section.title}</span>
            <div>
              {section.subsections.map(sub => (
                <span key={sub.link}>{sub.title}</span>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Basement;