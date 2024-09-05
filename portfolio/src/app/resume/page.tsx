"use client";

import { Value } from "@radix-ui/react-select";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs
} from "react-icons/fa"

import {
  SiPandas,
  SiScikitlearn,
  SiTypescript,
  SiTensorflow,
  SiTailwindcss,
  SiNextdotjs,
  SiNumpy,
  SiStreamlit,
  SiLangchain
} from "react-icons/si"

// about data
const about = {
  title: "About me",
  description: 'I’m Abdul Rehman, an AI and web development engineer with 1+ years of experience. Based in Pakistan, I’m fluent in both English and Urdu. Feel free to reach out to me from the following information.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abdul Rehman"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 3228298414"
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Year"
    },
    {
      fieldName: "Email",
      fieldValue: "abdul.rehman132802@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu"
    }

  ]

}

// experience data
const experience = {
  icon: '\assets\resume-2\badge.svg',
  title: 'My experience',
  description: "I am AI Engineer with more then 1 year of experience in developing advanced machine learning and deep learning models. Skilled in creating custom AI solutions, specializing in NLP, generative AI, and neural network architectures.",
  items: [
    {
      company: 'Itsolera Pvt Ltd.',
      position: 'NLP Engineer',
      duration: 'Jun(2024) - Present'
    },
    {
      company: 'Bawdicsoft Pvt Ltd.',
      position: 'Junior Ai Engineer',
      duration: 'August(2023) - May(2024)'
    },
  ]
}

//education data
const education = {
  icon: '\assets\resume-2\cap.svg',
  title: 'My education',
  description: 'I am doing Bachelors in Computer Science from Federal Urdu University in the final year, with a strong foundation in AI and ML, further enhanced through specialized courses at Saylani Mass IT. Completed an AI & ML Course and currently pursuing advanced training in Generative AI & Chatbot Development. Previous academic achievements include Intermediate in Pre-Engineering  and Matriculation in Computer Science, and also completed Hifz ul Quran.',
  items: [
    {
      institution: 'Federal Urdu University Of Arts, Science & Technology',
      degree: 'Bachelors Of Science In Computer Science',
      duration: '2020 - 2024'
    },
    {
      institution: 'Saylani Mass IT',
      degree: 'Generative-Ai & Chatbot Development ',
      duration: 'Present'
    },
    {
      institution: 'Saylani Mass IT',
      degree: 'Ai & Ml Course',
      duration: '2021 - 2022'
    },
    {
      institution: 'Government Superior Science College',
      degree: 'Intermediate In Pre Engineering',
      duration: '2018 - 2020'
    },
    {
      institution: 'Al Mumtaz Academy',
      degree: 'Matriculation In Computer Science',
      duration: '2016 - 2018'
    },
    {
      institution: 'Al Mumtaz Academy',
      degree: 'Hifz ul Quran',
      duration: '2013 - 2016'
    },

  ]
}

// Skills Data
const skills = {
  title: 'My skills',
  description: 'I specialize in Artificial intellegence using Python, TensorFlow, and LangChain for AI projects. I work with Next.js, and TypeScript for frontend development. My expertise also includes data tools like NumPy, Pandas, and Scikit-learn, along with Tailwind CSS for design.',
  skillList: [
    {
      icon: <FaPython />,
      name: 'python',
    },
    {
      icon: <SiNumpy />,
      name: 'numpy',
    },
    {
      icon: <SiPandas />,
      name: 'pandas',
    },
    {
      icon: <SiScikitlearn />,
      name: 'scikit learn',
    },
    {
      icon: <SiTensorflow />,
      name: 'tensorflow',
    },
    {
      icon: <SiStreamlit />,
      name: 'streamlit',
    },
    {
      icon: <SiLangchain />,
      name: 'langchain',
    },
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },

  ]
}

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: { deley: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">
                              {item.company}
                            </p>
                          </div>
                        </li>)
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full ">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white text-primary px-1 rounded-md capitalize">
                              {skill.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent value="about" className="w-full text-center xl:text-left ">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent> 
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume