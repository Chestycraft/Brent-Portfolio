import { Phone, Mail, Send } from 'lucide-react';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      {/* Separator line */}
      <div className="w-full h-[1px] bg-gray-700 mb-8"></div>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-5 gap-10">
        {/* About / Description */}
        <div className="flex-1 text-center lg:text-left text-sm lg:text-base">
          <p>
            I'm a passionate web and app developer, I also like making AI agents. I have no job experience yet but I'm looking for opportunities to start my career.
            I love creating beautiful and functional applications that make a difference. I'd love to hear from you if you're interested in working together.
          </p>
        </div>

        {/* Links and Social Icons */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-5">
          {/* Navigation Links */}
          <ul className="flex flex-col gap-2 text-indigo-400 font-medium">
            <li>
              <a href="#about" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#toolkit" className="hover:underline">
                Toolkit
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Me
              </a>
            </li>
          </ul>

          {/* Social & Contact Icons */}
          <div className="flex flex-row gap-4 mt-5 text-white w-full justify-center lg:justify-start">
  {/* Phone */}
  <Phone
    className="cursor-pointer hover:text-indigo-400"
    onClick={() => window.open("tel:09062081535")}
  />

  {/* Email */}
  <Mail
    className="cursor-pointer hover:text-indigo-400"
    onClick={() => window.open("mailto:brentixorgeix@gmail.com")}
  />

  {/* Telegram */}
  <Send
    className="cursor-pointer hover:text-indigo-400"
    onClick={() => window.open("https://t.me/09062081535")}
  />

  {/* LinkedIn */}
  <SiLinkedin
    size={24}
    className="cursor-pointer hover:text-indigo-400"
    onClick={() =>
      window.open("https://www.linkedin.com/in/orgen-brent-694342329/", "_blank")
    }
  />

  {/* GitHub */}
  <SiGithub
    size={28}
    className="cursor-pointer hover:text-indigo-400"
    onClick={() =>
      window.open("https://github.com/Chestycraft", "_blank")
    }
  />
</div>

        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} Brent Orgen. All rights reserved.
      </p>
    </footer>
  );
};
