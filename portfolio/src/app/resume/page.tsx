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
  description: '',
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
      fieldName: "Nationality",
      fieldValue: "Pakistan"
    },
    {
      fieldName: "Email",
      fieldValue: "abdul.rehman132802@gmail.com"
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
  description: '',
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
  description: '',
  items: [
    {
      institution: 'Federal Urdu University Of Arts, Science & Technology',
      position: 'Bachelors Of Science In Computer Science',
      duration: '2020 - 2024'
    },
    {
      institution: 'Saylani Mass IT',
      position: 'Generative-Ai & Chatbot Development ',
      duration: 'Present'
    },
    {
      institution: 'Saylani Mass IT',
      position: 'Ai & Ml Course',
      duration: '2021 - 2022'
    },
    {
      institution: 'Government Superior Science College',
      position: 'Intermediate In Pre Engineering',
      duration: '2018 - 2020'
    },
    {
      institution: 'Al Mumtaz Academy',
      position: 'Matriculation In Computer Science',
      duration: '2016 - 2018'
    },
    {
      institution: 'Al Mumtaz Academy',
      position: 'Hifz ul Quran',
      duration: '2013 - 2016'
    },

  ]
}

// Skills Data
const skills = {
  title: 'My skills',
  description: '',
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
    {
      icon: <FaNodeJs />,
      name: 'node.js',
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

import { ScrollArea } from "@radix-ui/react-scroll-area";
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
        <Tabs defaultValue="experience"
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
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full ">
              Education
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full ">
              Skills
            </TabsContent>

            {/* about me */}
            <TabsContent value="about" className="w-full ">
              About me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume