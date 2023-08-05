import locationIcon from "/icons/location.svg";
import globeIcon from "/icons/globe.svg";
import { useState } from "react";


export default function Collapse({ obj }) {
     const [show, setShow] = useState(false)


     return (
          <div className="overflow-hidden">
               <div onClick={() => { show ? setShow(false) : setShow(true) }} className="flex flex-wrap justify-between bg-neutral-700 rounded font-semibold text-xl py-3 px-6 mb-4">
                    <h3>{obj.designation} @ {obj.company}</h3>
                    <p>{obj.duration} <button className="xl:text-2xl text-xl xl:ml-6 ml-4 hover:text-orange-400">+</button></p>
               </div>
               <div className={`${show ? "h-auto bg-neutral-800 rounded space-y-4 px-9 py-6 mb-9 sl-animated-xl" : "h-0 sl-animated-xl"}`}>
                    <div className="flex items-center">
                         <img src={locationIcon} alt="" className="h-4 w-fit mr-2" />
                         <span className="opacity-70 mr-6">{obj.location}</span>
                         <img src={globeIcon} alt="" className="h-4 w-fit mr-2" />
                         <a href={`https://${obj.website}`} className="opacity-70" target="_blank">{obj.website}</a>
                    </div>
                    <p>{obj.description}</p>
                    {obj.keyword && <ul className="flex flex-wrap items-center space-x-2 text-base">
                         {obj.keyword.map((word, index)=>(<li key={index} className="rounded-full bg-neutral-950/70 px-4 py-1">{word}</li>))}
                    </ul>}
               </div>
          </div>
     )
}