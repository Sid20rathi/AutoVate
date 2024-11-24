"use client"
import React from 'react'
import { TypingAnimationDemo } from "./text"
import ShimmerButton from './ui/shimmer-button'
import Image from 'next/image'
import TextRevealByWord from './ui/text-reveal'

const Herosection = () => {
  return (
    <div className='mt-32'>
       
        <div className="z-10 flex  items-center justify-center   dark:bg-black bg-orange-400">
          <div className="flex flex-row justify-center items-center w-full h-full sticky">
            <div> 
            <TextRevealByWord text="AutoVate: Redefining Innovation Through Seamless Automation for a Smarter Tomorrow." />
            </div>
            <div>
            <div className=" pr-11"><Image src="/project.png" alt="project pic" width={800} height={800} /></div>
            </div>
          
          </div>
      
      
  
    
        
            
        </div>
        <div className='mt-16'>
        <TypingAnimationDemo/>

        </div>
        
        <div className="mt-16 flex justify-center pr-10 ">
          
           <Image src ="/napkin-selection.png" alt="project pic" width={700} height={700}/>
      
        </div>
        </div>
   
  )
}

export default Herosection