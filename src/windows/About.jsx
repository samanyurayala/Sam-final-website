import React from 'react'
import WindowWrapper from '@hoc/WindowWrapper';
import WindowControls from '@components/WindowControls';

const About = () => {
  return (
    <>
        <div className="window-header">
            <WindowControls target="mail" />
            <h2>About Me</h2>
        </div>
        <div className="content">
            <p className="font-g text-5xl text-center">About Me</p>
            <hr />
            <p className="font-l text-sm mt-1 mb-1 text-center">Hi, I'm Sam. I'm in 10th grade, and my hobbies are coding, playing Minecraft, and playing guitar.</p>
            <hr />
            <div className="bg-white font-l flex justify-center">
                <p className="text-3xl pt-3 pb-3 text-center">Skills:
                <ul className="list-none text-xl text-center">
                    <li>HTML, CSS, JavaScript ✔</li>
                    <li>React, TailwindCSS ✔</li>
                    <li>Java ✔</li>
                    <li>Python ✔</li>
                    <li>C++ ✔</li>
                </ul>
                </p>
            </div>
            <hr />
            <div className="bg-white font-l flex justify-center items-center h-12 gap-5">
                <img src="/svg/html.svg" alt="" className="h-10 w-fit" />
                <img src="/svg/css.svg" alt="" className="h-10 w-fit" />
                <img src="/svg/javascript.svg" alt="" className="h-10 w-fit" />
                <img src="/svg/react.svg" alt="" className="h-10 w-fit" />
                <img src="/svg/tailwindcss.svg" alt="" className="h-6 w-fit" />
                <img src="/svg/java.svg" alt="" className="h-10 w-fit" />
                <img src="/svg/python.svg" alt="" className="h-10 w-fit" />
                <img src="/svg/cplusplus.svg" alt="" className="h-10 w-fit" />
            </div>
            <hr />
            <p className="text-2xl font-l text-center pt-1">Contact Me</p>
            <p className="text-lg font-l text-center pb-1">Email: sammythescammy01@gmail.com</p>
        </div>
    </>
  )
}

const AboutWindow = WindowWrapper(About, 'mail');

export default AboutWindow;