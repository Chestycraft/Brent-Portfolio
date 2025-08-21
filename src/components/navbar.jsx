
export const Navbar = () => {
    
    return(
        <>
        <nav className="
         top-0 left-0 
         w-full
         shadow 
         z-50 
         flex
         lg:justify-between  
         sm:justify-between 
         md:justify-between
         justify-center 
         flex-wrap 
         lg:px-[25%] 
         md:px-[20%]
         sm:px-[15%]
         py-5
         px-5 
         items-center">
            <h6 className="logo text-2xl font-bold px-5 cursor-pointer my-5">Brent Orgen</h6>
            <div className="flex gap-4">
            <a href="#toolkit">Toolkit</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            </div>
        </nav>
        </>
    )
}