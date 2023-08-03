/* eslint-disable react/jsx-no-comment-textnodes */

import { Link, Outlet } from "react-router-dom";



export default function RootLayout() {


     return (
          <>
               <header className="fixed flex flex-wrap justify-between items-center w-full px-12 py-4 z-50">
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

               <Outlet />

               <footer className=""></footer>
          </>
     )
} 