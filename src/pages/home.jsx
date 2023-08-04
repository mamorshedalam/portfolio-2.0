import heroBg from "/images/hero-bg.png";
import banner1 from "/images/banner-1.png";


export default function Home() {


     return (
          <>
               <section className="text-center h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="sl-container h-full flex flex-col justify-center">
                         <h2 className="font-black uppercase tracking-wide text-7xl mb-6">front-end developer</h2>
                         <p className="text-2xl text-orange-400"><span className="text-sky-50 opacity-70">Love to Play with codes in the arena of</span> JavaScript</p>
                    </div>
               </section>

               <section id="about">
                    <div className="sl-container grid grid-cols-2 items-center gap-6 py-40">
                         <div className="">
                              <h1 className="font-bold tracking-wide text-6xl mb-4">Hi, I'm Morshed Alam <br /> Web Developer</h1>
                              <p className="text-xl text-orange-400">// <span className="text-sky-50 opacity-70">Front-End Developer</span> // <span className="text-sky-50 opacity-70">Node Fan</span> // <span className="text-sky-50 opacity-70">JavaScript Expert</span></p>
                         </div>
                         <div className="text-lg space-y-4">
                              <p>I'm working as a Web Developer since 2019. I have developed a strong understanding of Web Development and related Technology. I always tried to think out of the box & bring something creative through Hard Work. And love working with Team.</p>
                              <p>My expertise in Front-End Technologies also includes <i>responsive design, cross-browser compatibility, and SEO-optimised code.</i> I take pride in staying up-to-date with the latest trends and best practices in Front-End Development to ensure that I can deliver top-quality work to my Clients.</p>
                         </div>
                    </div>
               </section>

               <section id="expertise" className=" py-40 bg-cover bg-bottom" style={{ backgroundImage: `url(${banner1})` }}>
                    <div className="sl-container text-lg space-y-9">
                         <div className="text-center">
                              <span className="text-xl opacity-70">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</span>
                              <h2 className="font-bold tracking-wide text-7xl">Skills & Expertise</h2>
                         </div>
                         <div className="w-2/3 text-center mx-auto space-y-2">
                              <p>The main area of expertise is Front-End Development (client side of the web).</p>
                              <p>I'm well-versed in HTML 5, CSS 3, and JavaScript (ES6) and worked extensively with popular Front-End frameworks such as React. I have also had a great deal of experience working with Node and used databases like MongoDB and Firebase.</p>
                              <p>Visit my <a href="https://www.linkedin.com/in/mamorshedalam" className="text-orange-400 hover:underline sl-animated-xl" target="_blank">Linkedin</a> for more details.</p>
                         </div>
                         <div className="space-y-6">
                              <ul className="flex flex-wrap justify-center mb-4">
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/js.svg" alt="" className="h-20" />
                                        <h3>JavaScript</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/react.svg" alt="" className="h-20" />
                                        <h3>React</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/node.svg" alt="" className="h-20" />
                                        <h3>Node</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/express.svg" alt="" className="h-20" />
                                        <h3>Express</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/mongodb.svg" alt="" className="h-20" />
                                        <h3>MongoDB</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/firebase.svg" alt="" className="h-20" />
                                        <h3>Firebase</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/tailwind.svg" alt="" className="h-20" />
                                        <h3>TailwindCSS</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/html5.svg" alt="" className="h-20" />
                                        <h3>HTML5</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/bootstrap.svg" alt="" className="h-20" />
                                        <h3>Bootstrap</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/css3-alt.svg" alt="" className="h-20" />
                                        <h3>CSS3</h3>
                                   </li>
                              </ul>
                              <ul className="flex flex-wrap justify-center mb-4">
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/git.svg" alt="" className="h-20" />
                                        <h3>Git</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/vs.svg" alt="" className="h-20" />
                                        <h3>VS Code</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/netlify.svg" alt="" className="h-20" />
                                        <h3>Netlify</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/chrome.svg" alt="" className="w-fit h-20 mx-auto" />
                                        <h3>Chrome Dev</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/figma.svg" alt="" className="h-20" />
                                        <h3>Figma</h3>
                                   </li>
                              </ul>
                              <ul className="flex flex-wrap justify-center mb-4">
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/ms.svg" alt="" className="h-20" />
                                        <h3>MS Office</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/ai.svg" alt="" className="h-20" />
                                        <h3>illustrator</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/ps.svg" alt="" className="h-20" />
                                        <h3>Photoshop</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/lr.svg" alt="" className="h-20" />
                                        <h3>Lightroom</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/xd.svg" alt="" className="h-20" />
                                        <h3>Adobe Xd</h3>
                                   </li>
                                   <li className="w-32 cursor-pointer text-center font-semibold space-y-2 px-4 mb-4">
                                        <img src="/public/icons/filmora.svg" alt="" className="h-20" />
                                        <h3>Filmora</h3>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </section>
          </>
     )
}