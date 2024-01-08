import leaderImgSm from '/images/mobile/image-interactive.jpg'
import leaderImgLg from '/images/desktop/image-interactive.jpg'

const Leader = () => {
  return (
    <section className="flex items-centerjustify-center lg:mb-[4rem] lg:relative  flex-col lg:flex-row lg:ml-[10rem] ">
        <div className="mx-[1.7rem] lg:hidden">
            <img src={leaderImgSm}/>
        </div>
        <div className="hidden lg:block w-full h-full">
            <img src={leaderImgLg}/>
        </div>

        <div className="flex items-centerjustify-center lg:absolute lg:top-[10rem] lg:left-[34rem] lg:w-[40rem] lg:h-[25rem] lg:px-[3rem] lg:pt-[3rem] lg:text-start lg:pl-[6rem] bg-White mx-[1.7rem] flex-col text-center">
            <h2 className='mt-[2.5rem] mb-[1rem] text-[2rem] font-Joe  lg:text-[3rem] '>THE LEADER IN INTERACTIVE VR</h2>
            <p className='font-Alata text-Dark-Gray'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
    </section>
  )
}

export default Leader
