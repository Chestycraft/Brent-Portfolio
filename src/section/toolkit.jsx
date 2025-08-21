import { Toolcard } from "../components/toolcard";

export const ToolKit = () => {
  const logos = [
    {
      name: "Nextjs",
      src: "/images/next.png",

    },
    {
      name: "Python",
      src: "/images/python.png",

    },
    {
      name: "Tailwind",
      src: "/images/tailwind.png",

    }
    ,
    {
      name: "React",
      src: "/images/react_logo.png",

    },
    {
      name: "Supabase",
      src: "/images/supabase.png",

    },
    {
      name: "html+css+javascript",
      src: "/images/webdev.webp",

    }
    ,
    {
      name: "Langgraph",
      src: "/images/langgraph.png"
    }
    ,
    {
      name: "FastAPI",
      src: "/images/fastapi.png"
    }
  ];

  return (
    <>
  {/* Top divider line */}


  {/* Toolbox container */}
  <div
id="toolkit"
    className="
      relative
      w-full
      flex
      flex-col
      justify-center
      items-center 
      text-center
      text-white
      rounded-md
      mb-20
    "
  >


    {/* Title */}
    <h1 className="text-4xl mb-10 ">Toolkit</h1>

    {/* Logos */}
    <div
      className="
        flex
        flex-row 
        gap-5 
        flex-wrap 
        lg:px-[25%] 
        md:px-[20%]
        sm:px-[15%]
        justify-center
      "
    >
      {logos.map((item, index) => (
        <div key={index}>
          <Toolcard logos={item} />
        </div>
      ))}
    </div>
  </div>

  {/* Bottom divider line */}

</>

  );
};
