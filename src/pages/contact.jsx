


export default function Contact() {


     return (
          <section className="md:py-20 xs:py-16 py-12">
               <h2 className="text-center font-bold text-4xl">Let's Cook Something...</h2>
               <div className="w-1/2 mx-auto">
                    <form action="" className="flex flex-wrap">
                         <div className="w-1/2 pr-3">
                              <label htmlFor="name">Name</label>
                              <input id="name" type="text" className="bg-neutral-800 rounded px-6 py-4 mt-2 border border-neutral-700" />
                         </div>
                         <div className="w-1/2 pl-3">
                              <label htmlFor="mail">Email</label>
                              <input id="mail" type="text" className="bg-neutral-800 rounded px-6 py-4 mt-2 border border-neutral-700" />
                         </div>
                         <div className="w-full mt-6">
                              <label htmlFor="message">Message</label>
                              <textarea id="message" name="" className="bg-neutral-800 rounded px-6 py-4 h-40 mt-2 border border-neutral-700"></textarea>
                         </div>
                    </form>
               </div>
          </section>
     )
}