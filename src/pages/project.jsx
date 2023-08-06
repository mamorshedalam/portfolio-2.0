import leftArrow from "/icons/left.svg";
import projectImg from "/images/work/portfolio-1.jpg";


export default function Project() {


     return (
          <section className="md:py-20 xs:py-16 py-12">
               <div className="sl-container">
                    <button className="flex items-center justify-center sm:w-10 w-8 sm:h-10 h-8 rounded-full bg-neutral-800 md:mb-6 mb-4 hover:bg-neutral-700 sl-animated-xl"><img src={leftArrow} alt="" className="sm:h-6 h-5" /></button>
                    <h3 className="text-orange-400 capitalize font-semibold">// <span className="text-sky-50 opacity-70">web Development</span></h3>
                    <h2 className="lg:w-1/2 lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold tracking-wide">X Metaverse Pro</h2>
                    <div className="flex flex-wrap items-end justify-between lg:my-20 sm:my-12 xs:my-8 my-5">
                         <div className="md:w-3/6 md:space-y-6 space-y-4 xs:mb-6 mb-4">
                              <p>Build static UI of the project.</p>
                              <p className="opacity-70">X METAVERSE PRO is a super ecology built on Web 3.0 and DeFi 2.0 architecture. It is committed to building a new business world of 3D immersive metaverse - X METAWORLD. X METAVERSE PRO collaborates with global technology enthusiasts, financial experts, business elites, and Dao members to develop Metaverse Investment Bank, NFT Trading Market, Metaverse Mall, Alliance Reserve Bureau, Dex, GameFi, SocialFi, Metaverse City Cluster, and other ecological applications</p>
                         </div>
                         <div className="md:w-2/6">
                              <div className="flex flex-wrap">
                                   <div className="lg:w-1/2 w-full lg:pr-8 xs:mb-6 mb-4">
                                        <p className="font-bold sm:pt-4 pt-2 border-t border-sky-50/70">Client</p>
                                        <h4 className="opacity-70 md:text-base">Spinner Tech</h4>
                                   </div>
                                   <div className="lg:w-1/2 w-full lg:pl-8 xs:mb-6 mb-4">
                                        <p className="font-bold sm:pt-4 pt-2 border-t border-sky-50/70">Technologies</p>
                                        <h4 className="opacity-70 md:text-base">JavaScript, TailwindCSS, Chart JS, Lottie Animation</h4>
                                   </div>
                              </div>
                              <a href="" className="group flex items-center gap-3 mt-2"><span className="group-hover:text-orange-400 sl-animated-xl">Open Project</span> <svg className="w-4 fill-sky-50 group-hover:fill-orange-400 sl-animated-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a>
                              <a href="" className="group flex items-center gap-3 mt-2"><span className="group-hover:text-orange-400 sl-animated-xl">Source Code</span> <svg className="w-4 fill-sky-50 group-hover:fill-orange-400 sl-animated-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a>
                         </div>
                    </div>
                    <div className="md:space-y-9 xs:space-y-6 space-y-4">
                         <img src={projectImg} alt="" />
                         <img src={projectImg} alt="" />
                         <img src={projectImg} alt="" />
                         <img src={projectImg} alt="" />
                    </div>
               </div>
          </section>
     )
}