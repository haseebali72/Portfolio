import React from 'react'
import imageSrc from "../assets/Developer.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'



const Main = () => {
  const [text] = useTypewriter({
    words : ['FrontEnd Developer.', 'Web Developer.', 'Software Developer.' ],
    loop : {},
    typeSpeed: 100,
    
})
  return (
    <>
        <main>
        {/* First Section */}
           
            <section className='text-white flex justify-around my-6 h-screen'>
                
                {/* Left Section */}
                <div className='w-2/5 h-40 mt-52 mx-0 text-3xl'>
                     Hello World! I'm <span className='text-yellow-950'>Haseeb Ali</span>
                    <div> and I'm a <span className='font-bold text-gray-50'>{text}</span><Cursor/></div>
                </div>
                
                
                {/* Right Section */}
                <div className='w-96'>
                  <img className='max-w-md mx-auto -ml-20 mt-20' src={imageSrc} alt='Developer Desk' ></img>
                </div>

            </section>
        </main>
    </>
  )
}

export default Main