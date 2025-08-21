export const ProjectCard = ({ projects }) => {
  // when projects become many change this to have a button to go to full project archive
  return (
    <>
      <div className="relative flex flex-row gap-5 items-center flex-wrap-reverse lg:px-[20%] px-[5%] w-full mb-5
        bg-gradient-to-r from-transparent via-neutral-900/30 to-transparent py-5">

        {/* Top fading border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        {/* Bottom fading border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>

        {/* Photo */}
        <img src={projects.imagesrc} alt="" className="w-[200px] h-[100px]" />

        {/* Name and description */}
        <div className="lg:max-w-[80%] lg:w-[70%] w-[80%] max-w-[98%]">
          <p>
            <span className="font-bold text-xl text-white">{projects.name}</span><br />
            <span className="lg:text-base text-sm">{projects.description}</span>
          </p>

          {/* Stack */}
          <div className="flex flex-row flex-wrap gap-1">
            {projects.stack.map((item, index) => (
              <div key={index} className="flex text-center p-2 bg-white/10 rounded-4xl">
                <small>{item}</small>
              </div>
            ))}
           <p className="cursor-pointer text-white break-all" onClick={() => window.open(projects.link, "_blank")}>{projects.link}</p>
          </div>
        </div>
      </div>
    </>
  );
};
