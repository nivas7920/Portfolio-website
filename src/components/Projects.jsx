import React,{useEffect} from 'react'
import counter from '../assets/projects/counter.png'
import Memories from '../assets/projects/Memories.jpg'
import study from '../assets/projects/study.png'
import Testinomial from '../assets/projects/Testinomial.png'
import Shop from '../assets/projects/Shop.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: counter,
      desc: "React counter app is a program that allows users to interact with a numerical counter value. It demonstrates basic state management and user ...",
      code: "https://github.com/nivas7920/Counter-app.git"
    },
    {
      id: 2,
      src: Memories,
      desc: "A feature-rich eCommerce web app developed with React.js, Firebase, Redux, and Bootstrap.....",
      code: ""
    },
    {
      id: 3,
      src: study,
      desc: "I have created a Study-Notion project using react-js and tailwind and to run this project you need to first install the node modules..",
    
      code: ""
    },
    {
      id: 4,
      src: Shop,
      desc: "This is a simple web store showcasing various products with images and descriptions, allowing users to make purchases...",
      
      code: ""
    },
    {
      id: 5,
      src: Testinomial,
      desc: "This project demonstrates how to create a testimonial slider component using React. A testimonial slider is a common UI element....",
     
      code: ""
    },
    
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
             Projects().map(({ id, src, desc, /*demo,*/ code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button> */}
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects