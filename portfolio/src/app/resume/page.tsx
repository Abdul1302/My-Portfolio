"use client";

import { Value } from "@radix-ui/react-select";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs} from "react-icons/fa"

import{
  SiPandas,
  SiScikitlearn,
  SiTypescript,
  SiTensorflow,
  SiTailwindcss,
  SiNextdotjs
}  from "react-icons/si"

// about data
const about={
  title:"About me",
  description:'',
  info:[
    {
      fieldName:"Name",
      fieldValue: "Abdul Rehman"
    },
    {
      fieldName:"Phone",
      fieldValue: "(+92) 3228298414"
    },
    {
      fieldName:"Experience",
      fieldValue: "1+ Year"
    },
    {
      fieldName:"Nationality",
      fieldValue: "Pakistan"
    },
    {
      fieldName:"Email",
      fieldValue: "abdul.rehman132802@gmail.com"
    },
    {
      fieldName:"Languages",
      fieldValue: "English, Urdu"
    }
    
  ]

}

// experience data
const experience={
  
}

const Resume = () => {
  return (
    <div>Resume Page</div>
  )
}

export default Resume