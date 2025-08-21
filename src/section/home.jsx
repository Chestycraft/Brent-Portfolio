
export const Home = () =>{



    return(
        <>
        <div className="px-[10%] py-10 w-full flex flex-col items-center lg:mb-10 md:mb-5" id="about">
            {/**photo container*/}
                <img 
  src="/images/profile_pic.webp" 
  alt="My Profile Picture"
  className="w-full min-w-[200px] max-w-[200px] aspect-square rounded-full mb-5 object-cover"
/>
            <div className="p-5 text-center lg:text-2xl md:text-2xl text-head">
                <h1 className="text-gray-900 non-darktext text-[250%]">Web Developer</h1>
                <br></br> Hi, I'm Brent Orgen, a web developer and AI enthusiast. I enjoy solving problems, designing solutions, and building tools that improve efficiency. I'm passionate about exploring automation and the endless possibilities of technology.
            </div>
        </div>
        </>
    )
}