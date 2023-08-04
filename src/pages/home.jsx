import heroBg from "/images/hero-bg.png";
import banner1 from "/images/banner-1.png";
import jsIcon from "/icons/js.svg";
import reactIcon from "/icons/react.svg";
import nodeIcon from "/icons/node.svg";
import expressIcon from "/icons/express.svg";
import mongodbIcon from "/icons/mongodb.svg";
import firebaseIcon from "/icons/firebase.svg";
import tailwindIcon from "/icons/tailwind.svg";
import html5Icon from "/icons/html5.svg";
import bootstrapIcon from "/icons/bootstrap.svg";
import css3Icon from "/icons/css3.svg";
import gitIcon from "/icons/git.svg";
import vsIcon from "/icons/vs.svg";
import netlifyIcon from "/icons/netlify.svg";
import figmaIcon from "/icons/figma.svg";
import chromeIcon from "/icons/chrome.svg";
import msIcon from "/icons/ms.svg";
import aiIcon from "/icons/ai.svg";
import psIcon from "/icons/ps.svg";
import lrIcon from "/icons/lr.svg";
import xdIcon from "/icons/xd.svg";
import filmoraIcon from "/icons/filmora.svg";
import locationIcon from "/icons/location.svg";
import globeIcon from "/icons/globe.svg";


export default function Home() {
     const programArray = [
          { name: "JavaScript", icon: jsIcon },
          { name: "React", icon: reactIcon },
          { name: "Node", icon: nodeIcon },
          { name: "Express", icon: expressIcon },
          { name: "MongoDB", icon: mongodbIcon },
          { name: "Firebase", icon: firebaseIcon },
          { name: "TailwindCSS", icon: tailwindIcon },
          { name: "HTML5", icon: html5Icon },
          { name: "Bootstrap", icon: bootstrapIcon },
          { name: "CSS3", icon: css3Icon }
     ];
     const toolArray = [
          { name: "Git", icon: gitIcon },
          { name: "VS Code", icon: vsIcon },
          { name: "Netlify", icon: netlifyIcon },
          { name: "Figma", icon: figmaIcon },
          { name: "Chrome Dev", icon: chromeIcon }
     ];
     const designArray = [
          { name: "MS Office", icon: msIcon },
          { name: "illustrator", icon: aiIcon },
          { name: "Photoshop", icon: psIcon },
          { name: "Lightroom", icon: lrIcon },
          { name: "Adobe Xd", icon: xdIcon },
          { name: "Filmora", icon: filmoraIcon }
     ];
     const workArray = [
          { name: "X Metaverse Pro", category: "Front-End Development", img: "https://res.cloudinary.com/mamorshedalam/image/upload/v1677904916/portfolio/Screenshot_65_bqszyy.png" },
          { name: "Monetars", category: "Front-End Development", img: "https://res.cloudinary.com/mamorshedalam/image/upload/v1677904915/portfolio/Screenshot_34551_qg2ugh.png" },
          { name: "GVI", category: "Front-End Development", img: "https://res.cloudinary.com/mamorshedalam/image/upload/v1677747952/portfolio/portfolio-11_lbsih3.jpg" },
          { name: "Save The Student", category: "Front-End Development", img: "https://res.cloudinary.com/mamorshedalam/image/upload/v1677747950/portfolio/portfolio-9_vhquum.jpg" },
          { name: "Video Quiz", category: "Front-End Development", img: "https://res.cloudinary.com/mamorshedalam/image/upload/v1677747951/portfolio/portfolio-15_tm0mfc.jpg" }
     ]

     return (
          <>
               <section className="text-center h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="sl-container h-full flex flex-col justify-center">
                         <h2 className="font-black uppercase tracking-wide text-7xl mb-6">front-end developer</h2>
                         <p className="text-2xl text-orange-400"><span className="text-sky-50 opacity-70">Love to Play with codes in the arena of</span> JavaScript</p>
                    </div>
               </section>

               <section id="about" className="py-40">
                    <div className="sl-container grid grid-cols-2 items-center gap-6">
                         <div>
                              <h1 className="font-bold tracking-wide text-6xl mb-4">Hi, I'm Morshed Alam <br /> Web Developer</h1>
                              <p className="text-xl text-orange-400">// <span className="text-sky-50 opacity-70">Front-End Developer</span> // <span className="text-sky-50 opacity-70">Node Fan</span> // <span className="text-sky-50 opacity-70">JavaScript Expert</span></p>
                         </div>
                         <div className="space-y-4">
                              <p>I'm working as a Web Developer since 2019. I have developed a strong understanding of Web Development and related Technology. I always tried to think out of the box & bring something creative through Hard Work. And love working with Team.</p>
                              <p>My expertise in Front-End Technologies also includes <i>responsive design, cross-browser compatibility, and SEO-optimised code.</i> I take pride in staying up-to-date with the latest trends and best practices in Front-End Development to ensure that I can deliver top-quality work to my Clients.</p>
                         </div>
                    </div>
               </section>

               <section id="expertise" className="py-40 bg-cover bg-bottom" style={{ backgroundImage: `url(${banner1})` }}>
                    <div className="sl-container space-y-9">
                         <div className="text-center">
                              <span className="text-xl opacity-70 uppercase">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</span>
                              <h2 className="font-bold tracking-wide text-7xl">Skills & Expertise</h2>
                         </div>
                         <div className="w-2/3 text-center mx-auto space-y-2">
                              <p>The main area of expertise is Front-End Development (client side of the web).</p>
                              <p>I'm well-versed in HTML 5, CSS 3, and JavaScript (ES6) and worked extensively with popular Front-End frameworks such as React. I have also had a great deal of experience working with Node and used databases like MongoDB and Firebase.</p>
                              <p>Visit my <a href="https://www.linkedin.com/in/mamorshedalam" className="text-orange-400 hover:underline sl-animated-xl" target="_blank">Linkedin</a> for more details.</p>
                         </div>
                         <div className="space-y-6">
                              <ul className="flex flex-wrap justify-center mb-4">
                                   {programArray && programArray.map((item, index) => (
                                        <li key={index} className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                             <img src={item.icon} alt={item.name} className="w-fit h-20 mx-auto" />
                                             <h3>{item.name}</h3>
                                        </li>))}
                              </ul>
                              <ul className="flex flex-wrap justify-center mb-4">
                                   {toolArray && toolArray.map((item, index) => (
                                        <li key={index} className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                             <img src={item.icon} alt={item.name} className="w-fit h-20 mx-auto" />
                                             <h3>{item.name}</h3>
                                        </li>))}
                              </ul>
                              <ul className="flex flex-wrap justify-center mb-4">
                                   {designArray && designArray.map((item, index) => (
                                        <li key={index} className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                             <img src={item.icon} alt={item.name} className="w-fit h-20 mx-auto" />
                                             <h3>{item.name}</h3>
                                        </li>))}
                              </ul>
                         </div>
                    </div>
               </section>

               <section id="work" className="py-40">
                    <div className="sl-container space-y-12">
                         <div className="text-center">
                              <span className="text-xl opacity-70">EVERY PROJECT IS A NEW CHALLENGE.</span>
                              <h2 className="font-bold tracking-wide text-7xl">Projects & Work</h2>
                         </div>
                         <ul className="flex flex-wrap gap-6 font-semibold">
                              <li className="">Filter by</li>
                              <li className="text-orange-400 cursor-pointer">// <span className="text-sky-50 opacity-70 hover:opacity-100 sl-animated-xl">All</span></li>
                              <li className="group relative text-orange-400 cursor-pointer"><span className="absolute -top-3 -right-3 text-sm text-orange-400 opacity-70  group-hover:opacity-100 sl-animated-xl">04</span>// <span className="text-sky-50 opacity-70 group-hover:opacity-100 sl-animated-xl">Front-End</span></li>
                              <li className="relative text-orange-400 cursor-pointer">// <span className="text-sky-50 opacity-70 hover:opacity-100 sl-animated-xl">Back-End</span></li>
                              <li className="relative text-orange-400 cursor-pointer">// <span className="text-sky-50 opacity-70 hover:opacity-100 sl-animated-xl">Full-Stack</span></li>
                         </ul>
                         <div className="flex flex-wrap justify-center">
                              {workArray && workArray.map((project, index) => (
                                   <a className="group w-1/3 px-4 mb-6">
                                        <div className="overflow-hidden rounded-t"><img src={project.img} alt="" className="h-60 group-hover:scale-110 sl-animated-xl" /></div>
                                        <div className="bg-neutral-800 rounded-b px-9 py-6">
                                             <h3 className="font-bold text-2xl">{project.name}</h3>
                                             <div className="relative h-6">
                                                  <h4 className="absolute opacity-70 group-hover:top-0 group-hover:opacity-0 group-hover:invisible sl-animated-xl">{project.category}</h4>
                                                  <span className="absolute opacity-0 invisible group-hover:top-0 group-hover:opacity-70 group-hover:visible hover:opacity-100 hover:text-orange-400 sl-animated-xl">Show Project -</span>
                                             </div>
                                        </div>
                                   </a>
                              ))}
                         </div>
                    </div>
               </section>

               <section id="experience" className="py-40">
                    <div className="sl-container">
                         <div className="text-center">
                              <span className="text-xl uppercase opacity-70">all places I go try to give my best.</span>
                              <h2 className="font-bold tracking-wide text-7xl">Experience & Education</h2>
                         </div>
                         <div className="mt-9 w-2/3 mx-auto">
                              <div>
                                   <div className="flex flex-wrap justify-between bg-neutral-700 rounded font-semibold text-xl py-3 px-6 mb-4">
                                        <h3>Web Designer @ Spinner Tech</h3>
                                        <p>2022 - 2022 <button className="text-2xl ml-6 hover:text-orange-400">+</button></p>
                                   </div>
                                   <div className="bg-neutral-800 rounded space-y-4 px-9 py-6">
                                        <div className="flex items-center">
                                             <img src={locationIcon} alt="" className="h-4 w-fit mr-2" />
                                             <span className="opacity-70 mr-6">Chattogram, Bangladesh</span>
                                             <img src={globeIcon} alt="" className="h-4 w-fit mr-2" />
                                             <a href="www.spinnertech.dev" className="opacity-70">spinnertech.dev</a>
                                        </div>
                                        <p>In Spinner Tech Ltd, I explore myself. And learn to work together in a team. I also learn to handle projects on an IT farm. I enjoyed my 3 months with some awesome projects and teammates.</p>
                                        <ul className="flex flex-wrap items-center space-x-2 text-base">
                                             <li className="rounded-full bg-neutral-950/70 px-4 py-1">JavaScript</li>
                                             <li className="rounded-full bg-neutral-950/70 px-4 py-1">HTML5</li>
                                             <li className="rounded-full bg-neutral-950/70 px-4 py-1">CSS3</li>
                                             <li className="rounded-full bg-neutral-950/70 px-4 py-1">JQuery</li>
                                             <li className="rounded-full bg-neutral-950/70 px-4 py-1">Photoshop</li>
                                             <li className="rounded-full bg-neutral-950/70 px-4 py-1">illustrator</li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}