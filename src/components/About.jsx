import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { IoLocationSharp } from "react-icons/io5";
import { FaCloudDownloadAlt, FaFacebook, FaFirefox, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import resumePdf from './../assets/Full-Stack-Developer.pdf';




const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  
  const resumeLink = resumePdf
  
  const handleDownloadResume = (url) => {
  const resumeName = url.split('/').pop()
  const aTag = document.createElement('a')
  aTag.href = url
  aTag.setAttribute('Download' , resumeName)
  aTag.click()
  aTag.remove()
}

  return (
    <>
      <motion.div className="mb-4">
        <p className={`${styles.sectionSubText} uppercase`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          About Me
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[18px] leading-[30px]'>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] leading-[30px] mb-8'>Hi, I’m a passionate and detail-oriented Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). With a strong foundation in software engineering and a deep love for clean, efficient code, I thrive on turning complex problems into elegant, user-friendly solutions.I’m driven by curiosity and a constant desire to learn, build, and innovate. Whether I’m developing a responsive front-end interface or crafting robust back-end architecture, I aim to create seamless digital experiences that make a real impact.
        Let’s build something great together!🚀</motion.p>

      <div className="flex items-center gap-6">
        <div>
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="uppercase montserrat font-light text-3xl text-white">Open to work</motion.h1>
        <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center montserrat text-white"><IoLocationSharp /> <span className="pl-2">Based in Dhaka, Bangladesh</span></motion.p>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="text-white">
          <FaFirefox size={40} />
        </motion.div>
      </div>

      <div className="mt-6">
        {/*  */}
        <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="uppercase montserrat text-2xl mb-3 text-white">Find me on - </motion.h1>
        <p>
        <motion.a
        className="inline-flex items-center gap-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        href="mailto:ashagar619@gmail.com"><IoMdMail className="text-white" size={30} /> ashagar619@gmail.com </motion.a>
        </p>
        <p>
        <motion.a
        className="inline-flex items-center gap-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        href="https://api.whatsapp.com/send?phone=8801608093455" target="_blank"><BsWhatsapp className="text-white" size={30} /> +8801608-093455 </motion.a>
        </p>
      <div className="my-4 flex items-center gap-20 text-white">
        <div>
          <h1 className="flex items-center gap-10 text-[#424874]">
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            href="https://www.linkedin.com/in/shagar619/.com"><FaLinkedin className="text-white" size={30} /></motion.a>
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            href="https://github.com/shagar619"><FaGithub className="text-white" size={30} /></motion.a>
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            href="https://www.instagram.com/shagar619"><BsInstagram className="text-white" size={30} /></motion.a>
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            href="https://www.facebook.com/619shagar"><FaFacebook className="text-white" size={30} /></motion.a>
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            href="https://x.com/619_shagar"><BsTwitterX className="text-white" size={30} /></motion.a>
      </h1>
      </div>
      <div>
      </div>
      </div>
      </div>

      <button onClick={()=>handleDownloadResume(resumeLink)} target='_blank'   className="inline-flex justify-center mt-4 hover:bg-purple-600  hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-600 hover:text-white/80 text-white/90 font-semibold hover:text-white py-2 lg:px-4 px-2 border  rounded duration-150  items-center gap-x-1  "><FaCloudDownloadAlt className='mr-2' /> Resume</button>

      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
