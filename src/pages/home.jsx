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
                              <p className="text-xl text-orange-400">// <span className="text-sky-50 opacity-70">Front-End Developer</span> // <span className="text-sky-50 opacity-70">Node JS Fan</span> // <span className="text-sky-50 opacity-70">JavaScript Expert</span></p>
                         </div>
                         <div className="text-lg space-y-4">
                              <p>I'm working as a Web Developer since 2019. I have developed a strong understanding of Web Development and related Technology. I always tried to think out of the box & bring something creative through Hard Work. And love working with Team.</p>
                              <p>My expertise in Front-End Technologies also includes <i>responsive design, cross-browser compatibility, and SEO-optimised code.</i> I take pride in staying up-to-date with the latest trends and best practices in Front-End Development to ensure that I can deliver top-quality work to my Clients.</p>
                         </div>
                    </div>
               </section>

               <section id="expertise" className=" py-40 bg-cover bg-bottom" style={{ backgroundImage: `url(${banner1})` }}>
                    <div className="sl-container text-lg">
                         <div className="text-center mb-9">
                              <span className="text-xl opacity-70">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</span>
                              <h2 className="font-bold tracking-wide text-7xl">Skills & Expertise</h2>
                         </div>
                         <div className="w-2/3 text-center mx-auto space-y-6">
                              <p>The main area of expertise is Front-End Development (client side of the web).</p>
                              <p>I'm well-versed in HTML 5, CSS 3, and JavaScript (ES6) and worked extensively with popular Front-End frameworks such as React JS. I have also had a great deal of experience working with Node JS and used databases like MongoDB and Firebase.</p>
                              <p>Visit my <a href="https://www.linkedin.com/in/mamorshedalam" className="text-orange-400 hover:underline sl-animated-xl" target="_blank">Linkedin</a> for more details.</p>
                         </div>
                    </div>
               </section>
          </>
     )
}