import { ProjectCard } from "../components/projectcard"

export const Projects = ()=>{

const projects=[
    { link:"https://magymbio-web.vercel.app/" , name: "Magymbo Website", description: "A practice website when I was first learning web dev. The gym owner let me design a website of their gym as my practice project, It has a display of offers and a gym membership tracker and an admin dashboard.", imagesrc:"/images/project/Magymbo.JPG" ,stack:["Nextjs", "React", "Supabase"] },
    { link:"https://a-p-panels.vercel.app" ,name: "A.P Panels Portfolio website", description: "A portfolio website for a company that makes panels. This is another practice project.", imagesrc:"/images/project/AP.JPG" ,stack:["Vite+React", "Tailwind"] },
    { link:"https://drive.google.com/file/d/1U_aAQ5JyWKOBLmPrs9kvZ5xnqDWNSSXE/view?usp=sharing" ,name: "ENAR(Easy No-Code Automation Robot)", description: "this is an unfinished personal project which is a desktop actions automator with an AI on it for action prompting. right now it can only do pyautogui actions but I'm planning to add other features like OCR and API requests automation. This app is for repetitive tasks.", imagesrc:"/images/project/ENAR.JPG" ,stack:["Python","Electron","Vite+React","Tailwind","Fastapi","Langgraph"] },]
    return(
        <>
        <div id="projects" className="w-full flex flex-col items-center mb-5">
                <h1 className="text-4xl">Projects</h1>        
        </div>
        {projects.map((item, index)=>(<div key={index}><ProjectCard projects={item}/></div>))}
        </>
    )
}