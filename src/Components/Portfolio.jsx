import React from 'react'
import WebProjectData from '../Data/ProjectData/WebProjectData'

const Portfolio = () => {
  return (
    <>
    <section  className='portfolio' >
    <div className="my-workBlur-1"> </div>

    <section className="w-[80%] m-auto text-orange-200 spooky-font">
      <h2 className="text-center text-[clamp(2rem,5vw,3.5rem)] mb-16">
        🦇 My Haunted Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12">
        {WebProjectData.map((project) => (
          <div key={project.id} className="group [perspective:1000px]">
            <div className="relative h-[350px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden border-2 border-orange-400 shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Back */}
              <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black bg-opacity-80 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-orange-600 text-black font-semibold rounded hover:bg-orange-500 transition"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-lime-500 text-black font-semibold rounded hover:bg-lime-400 transition"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
      
    </section>
      
    </>
  )
}

export default Portfolio
