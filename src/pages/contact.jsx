


export default function Contact() {


     return (
          <section className="md:pt-28 xs:pt-20 py-14 md:px-6 sm:px-4 px-2">
               <h2 data-wow-duration="3s" className="wow fadeIn text-center font-bold md:text-4xl sm:text-3xl text-2xl mb-9">Let's Cook Something Together <span className="text-orange-400">.</span></h2>
               <div className="lg:w-1/2 md:w-3/4 w-full mx-auto">
                    <form action="" className="flex flex-wrap">
                         <div className="sm:w-1/2 w-full sm:pr-3 xl:mb-6 mb-4">
                              <label htmlFor="name">Name</label>
                              <input id="name" type="text" className="bg-neutral-800 rounded xl:px-6 md:px-4 px-2 xl:py-4 md:py-2 py-1.5 mt-2 border border-neutral-700 hover:border-orange-400 focus:border-orange-400 sl-animated" />
                         </div>
                         <div className="sm:w-1/2 w-full sm:pl-3 xl:mb-6 mb-4">
                              <label htmlFor="mail">Email</label>
                              <input id="mail" type="text" className="bg-neutral-800 rounded xl:px-6 md:px-4 px-2 xl:py-4 md:py-2 py-1.5 mt-2 border border-neutral-700 hover:border-orange-400 focus:border-orange-400 sl-animated" />
                         </div>
                         <div className="w-full xl:mb-6 mb-4">
                              <label htmlFor="message">Message</label>
                              <textarea id="message" name="" className="bg-neutral-800 rounded xl:px-6 md:px-4 px-2 xl:py-4 md:py-2 py-1.5 md:h-40 h-32 mt-2 border border-neutral-700 hover:border-orange-400 focus:border-orange-400 sl-animated"></textarea>
                         </div>
                         <div className="w-full text-right">
                              <button className="xl:px-6 px-4 xl:py-3 py-2 rounded border-2 border-sky-50 hover:text-orange-400 hover:border-orange-400 sl-animated-xl">Send Message</button>
                         </div>
                    </form>
               </div>
          </section>
     )
}