"use client";

import { FiGithub } from "react-icons/fi"
import Link from "next/link";
import { text } from "stream/consumers";
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Story Creation & Completion Model',
    description: 'Developed a model to transform descriptions into coherent stories using RAG and convert these stories into audio narrations. Performed prompt engineering using LLaMA-3 and integrated a pyttsx3 aibrary for text-to-speech task for high-quality audio output. This model can also be able to complete the un-completed stories.',
    href: ''
  },
  {
    num: '02',
    title: 'AI Healthcare Chatbot System',
    description: 'This chatbot System is designed to provide healthcare support online, Guiding patients towards appropriate treatment options. Performed RAG and prompt engineering using LLaMA-3 as healthcare assistant, integrated a pyttsx laibrary model for audio output. Used map-api for finding the nearest hospital or clinic for the diseases.',
    href: ''
  },
  {
    num: '03',
    title: 'Company-Based Chatbot',
    description: "Developed a company-specific chatbot utilizing the LLaMA-3 versatile model with the Groq API and RAG. The model is trained on the company's proprietary data, allowing it to deliver accurate, context-driven responses tailored to the organization's needs, enhancing internal communication and customer support capabilities.",
    href: ''
  },
  {
    num: '04',
    title: 'AI Speech-to-Speech Model',
    description: 'Developed a speech-to-speech chatbot using the LLaMA-3 versatile model for conversational responses. Integrated Whisper Large-V3 for speech-to-text conversion and the pyttsx3 library for seamless text-to-speech output. This model enhance the user experience in voice-based communication systems.',
    href: ''
  },

]

const Services = () => {
  return (
    <section className="min-h-[200vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-4 group">

                {/* top */}
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:scale-110 ">
                    <FiGithub  className="text-primary text-3xl"/>
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[24px] font-bold loading-none text-white group-hover:text-accent transition-all duration-500  ">{service.title}</h2>

                {/* Description */}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>

                {/* Note */}
                <div>
                  
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services