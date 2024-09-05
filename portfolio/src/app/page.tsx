import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

//component
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Ai & Ml Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Abdul Rehman</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
            I am an experienced AI and ML Engineer with a strong focus on Natural Language Processing (NLP) 
            & Generative AI. My expertise lies in developing intelligent systems that understand and generate human language.
            </p>

            {/* button & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-10" 
                iconStyles="w-14 h-14 text-[28px] border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>

    </section>
  )
}

export default Home
