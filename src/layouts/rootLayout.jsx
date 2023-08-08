import { Link, Outlet, useLocation } from "react-router-dom";
import facebookIcon from "/icons/facebook.svg";
import linkedinIcon from "/icons/linkedin.svg";
import instagramIcon from "/icons/instagram.svg";
import twitterIcon from "/icons/twitter.svg";
import githubIcon from "/icons/github.svg";
import mailIcon from "/icons/mail.svg";
import menuIcon from "/icons/menu.svg";
import weChatImg from "/images/weChat.jpg";
import whatsappImg from "/images/whatsapp.jpg";
import { useEffect, useState } from "react";


export default function RootLayout() {
     const { pathname } = useLocation();
     const [show, setShow] = useState(false);

     useEffect(() => { // Top in Render
          if (pathname != "/") window.scrollTo(0, 0);
     }, [pathname]);

     return (
          <>
               <header className={`${show ? "bg-neutral-800" : "bg-transparent"} fixed flex flex-wrap justify-between items-center w-full backdrop-blur-sm xl:px-12 sm:px-6 px-4 xs:py-4 py-2 z-50 transition-all duration-700`}>
                    <Link to={`/`} className="uppercase font-bold tracking-wider xs:text-2xl text-xl"><span className="font-black tracking-widest text-orange-400">#</span> morshed alam</Link>
                    <nav className={`${show ? "w-1/2 opacity-100 visible" : "w-0 opacity-0 invisible"} lg:relative absolute left-0 top-full lg:bg-transparent bg-neutral-800 lg:opacity-100 lg:visible lg:w-auto lg:h-auto h-screen lg:px-0 sm:px-6 px-4 lg:py-0 sm:py-4 font-semibold xs:text-lg text-base z-40 sl-animated-xl`}>
                         <ul className="sl-nav flex lg:flex-row flex-col item-center backdrop-blur-sm xl:gap-9 sm:gap-6 xs:gap-4 gap-3">
                              <li><a href={`/`}><span className="font-black tracking-widest text-orange-400">//</span>home</a></li>
                              <li><a href={`/#about`}><span className="font-black tracking-widest text-orange-400">//</span>about</a></li>
                              <li><a href={`/#expertise`}><span className="font-black tracking-widest text-orange-400">//</span>expertise</a></li>
                              <li><a href={`/#work`}><span className="font-black tracking-widest text-orange-400">//</span>work</a></li>
                              <li><a href={`/#experience`}><span className="font-black tracking-widest text-orange-400">//</span>experience</a></li>
                              <li><a href={`/contact`}><span className="font-black tracking-widest text-orange-400">//</span>contact</a></li>
                         </ul>
                    </nav>
                    <button onClick={() => { show ? setShow(false) : setShow(true) }} className="lg:hidden block"><img src={menuIcon} alt="" className="xs:scale-100 scale-90" /></button>
               </header>

               <main className="relative">
                    <Outlet />
               </main>

               <footer className="sl-container text-center md:pb-10 xs:pb-6 pb-4">
                    <ul className="flex flex-wrap justify-center sm:gap-4 gap-3 xs:mb-5 mb-3">
                         <li><a href="https://www.linkedin.com/in/mamorshedalam" className="block xs:w-10 w-8 xs:h-10 h-8 rounded-full border-2 border-sky-50 xs:p-2.5 p-1.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={linkedinIcon} alt="" className="h-full" /></a></li>
                         <li><a href="https://github.com/mamorshedalam" className="block xs:w-10 w-8 xs:h-10 h-8 rounded-full border-2 border-sky-50 xs:p-2.5 p-1.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={githubIcon} alt="" className="h-full" /></a></li>
                         <li><a href="https://twitter.com/mamorshedalam2" className="block xs:w-10 w-8 xs:h-10 h-8 rounded-full border-2 border-sky-50 xs:p-2.5 p-1.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={twitterIcon} alt="" className="h-full" /></a></li>
                         <li><a href="https://www.facebook.com/ma.morshedalambd" className="block xs:w-10 w-8 xs:h-10 h-8 rounded-full border-2 border-sky-50 xs:p-2.5 p-1.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={facebookIcon} alt="" className="h-full" /></a></li>
                         <li><a href="https://www.instagram.com/mamorshedalam/" className="block xs:w-10 w-8 xs:h-10 h-8 rounded-full border-2 border-sky-50 xs:p-2.5 p-1.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={instagramIcon} alt="" className="h-full" /></a></li>
                         <li><a href="mailto:mamorshedalam@outlook.com" className="block xs:w-10 w-8 xs:h-10 h-8 rounded-full border-2 border-sky-50 xs:p-2.5 p-1.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={mailIcon} alt="" className="h-full" /></a></li>
                    </ul>
                    <div className="flex flex-wrap justify-center gap-3">
                         <img src={weChatImg} alt="" className="xs:w-20 w-16 rounded" />
                         <img src={whatsappImg} alt="" className="xs:w-20 w-16 rounded" />
                    </div>
               </footer>
          </>
     )
} 