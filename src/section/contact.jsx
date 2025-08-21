import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, Send } from 'lucide-react';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export const Contact = () => {
  const form = useRef();
  const [isDisabled, setIsDisabled] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();
  setIsDisabled(true);

  emailjs
    .sendForm(
      "service_fynz02e",
      "template_e610zqc",
      form.current,
      "1MLGAM1TFJlk_J06L"
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");
        form.current.reset();
        setIsDisabled(false); // re-enable here
      },
      (error) => {
        alert("❌ Failed to send message. Try again later.");
        console.error(error);
        setIsDisabled(false); // also re-enable on error
      }
    );
};
  return (
    <div id="contact" className="flex items-center justify-center w-full min-h-screen bg-gray-900 text-white p-5">
      <div className="w-full max-w-xl bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        {/* Catchy headline */}
        <h6 className="text-center text-xl text-white font-semibold mb-2">
          Need a Web & App Developer?
        </h6>
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="p-3 rounded-lg border border-gray-600 bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold p-3 rounded-full shadow-md"
            disabled={isDisabled}
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-row gap-4 mt-5 text-white w-full justify-center">
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
  );
};
