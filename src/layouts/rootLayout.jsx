import { Link, Outlet } from "react-router-dom";
import facebookIcon from "/icons/facebook.svg";
import linkedinIcon from "/icons/linkedin.svg";
import instagramIcon from "/icons/instagram.svg";
import twitterIcon from "/icons/twitter.svg";
import githubIcon from "/icons/github.svg";
import mailIcon from "/icons/mail.svg";
import weChatImg from "/images/weChat.jpg";
import whatsappImg from "/images/whatsapp.jpg";


export default function RootLayout() {


     return (
          <>
               <header className="fixed flex flex-wrap justify-between items-center w-full backdrop-blur-sm px-12 py-4 z-50">
                    <Link to={`/`} className="uppercase font-bold tracking-wider text-2xl"><span className="font-black tracking-widest text-orange-400">#</span> morshed alam</Link>
                    <nav className="font-semibold text-lg">
                         <ul className="sl-nav flex item-center gap-9">
                              <li><Link to={`/`}><span className="font-black tracking-widest text-orange-400">//</span>home</Link></li>
                              <li><Link to={`#about`}><span className="font-black tracking-widest text-orange-400">//</span>about</Link></li>
                              <li><Link to={`#expertise`}><span className="font-black tracking-widest text-orange-400">//</span>expertise</Link></li>
                              <li><Link to={`/`}><span className="font-black tracking-widest text-orange-400">//</span>work</Link></li>
                              <li><Link to={`/`}><span className="font-black tracking-widest text-orange-400">//</span>experience</Link></li>
                              <li><Link to={`/`}><span className="font-black tracking-widest text-orange-400">//</span>contact</Link></li>
                         </ul>
                    </nav>
               </header>

               <main className="relative">
                    <Outlet />
               </main>

               <footer className="text-center pb-10">
                    <ul className="flex flex-wrap justify-center gap-4 mb-5">
                         <li><a href="https://www.linkedin.com/in/mamorshedalam" className="block w-10 h-10 rounded-full border-2 border-sky-50 p-2.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={linkedinIcon} alt="" className="h-full" /></a></li>
                         <li><a href="https://github.com/mamorshedalam" className="block w-10 h-10 rounded-full border-2 border-sky-50 p-2.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={githubIcon} alt="" className="h-full" /></a></li>
                         <li><a href="https://twitter.com/mamorshedalam2" className="block w-10 h-10 rounded-full border-2 border-sky-50 p-2.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={twitterIcon} alt="" className="h-full" /></a></li>
                         <li><a href="https://www.facebook.com/ma.morshedalambd" className="block w-10 h-10 rounded-full border-2 border-sky-50 p-2.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={facebookIcon} alt="" className="h-full" /></a></li>
                         <li><a href="https://www.instagram.com/mamorshedalam/" className="block w-10 h-10 rounded-full border-2 border-sky-50 p-2.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={instagramIcon} alt="" className="h-full" /></a></li>
                         <li><a href="mailto:mamorshedalam@outlook.com" className="block w-10 h-10 rounded-full border-2 border-sky-50 p-2.5 hover:bg-neutral-700 hover:border-neutral-700 sl-animated-xl"><img src={mailIcon} alt="" className="h-full" /></a></li>
                    </ul>
                    <div className="flex flex-wrap justify-center gap-3">
                         <img src={weChatImg} alt="" className="w-20 rounded" />
                         <img src={whatsappImg} alt="" className="w-20 rounded" />
                    </div>
               </footer>
          </>
     )
} 