"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { text } from "stream/consumers";
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Custom AI Model Development',
    description: ' Design and develop custom AI models tailored to specific needs and requirements, Implement and deploy machine learning and deep learning algorithms. ',
    href: ''
  },
  {
    num: '02',
    title: 'Natural Language Processing (NLP)',
    description: ' Develop NLP applications, including, chatbots, text summarization, language translation, and entity recognition.',
    href: ''
  },
  {
    num: '03',
    title: 'Generative AI Solutions',
    description: 'Create generative AI applications using techniques like GANs and RAG for content creation, image synthesis, and data augmentation.',
    href: ''
  },
  {
    num: '04',
    title: 'Model Fine-Tuning and Optimization',
    description: ' Fine-tune pre-trained models for specific tasks, optimizing hyperparameters and improving model accuracy and efficiency.',
    href: ''
  },

]

const Services = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center py-12 xl:py-0 ">
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
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45 ">
                    <BsArrowDownRight  className="text-primary text-3xl"/>
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[24px] font-bold loading-none text-white group-hover:text-accent transition-all duration-500  ">{service.title}</h2>

                {/* Description */}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services