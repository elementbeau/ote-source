{/** A navbar/sidebar component to be used on any page that a navbar will be used on */}
{/** currently used exclusively for the explore page, and the text hard coded for now for the presentation */}

export default function Navbar() {
   return(
      <nav className="flex h-screen">
         { /** This is the navbar fitted to the right side of the screen */}
         <aside className="w-64 bg-gray-800 text-white">

            { /** This is the customization of the navbar, colors and how wide it is, etc. */}
            <nav className="min-h-0 flex-1 flex overflow-hidden">
               <nav aria-label="Sidebar" className="narrow-sidebar hidden lg:block lg:bg-gray-800 lg:overflow-y-auto">
                  
                  { /** These are the contents of each item that within the navbar */}
                     <div className="relative w-64 flex space-y-4 flex-col p-2">
                        <a href="#" className="text-gray-400 hover:text-red-700">
                           <input type="checkbox" className="h-5 w-5"/>
                           <span className="p-1 inline-flex text-center text-lg font-normal">Image</span>
                        </a>

                        <a href="#" className="text-gray-400 hover:text-red-700">
                           <input type="checkbox" className="h-5 w-5"/>
                           <div className="p-1 inline-flex text text-lg font-normal ">Posted Today</div>
                        </a>

                        <a href="#" className="text-gray-400 hover:text-red-700">
                           <input type="checkbox" className="h-5 w-5"/>
                           <div className="p-1 inline-flex text-center text-lg font-normal ">Duplicates</div>
                        </a>

                        <a href="#" className="text-gray-400 hover:text-red-700">
                           <input type="checkbox" className="h-5 w-5"/>
                           <div className="p-1 inline-flex text-center text-lg font-normal ">Condition</div>
                        </a>

                        <a href="#" className="text-gray-400 hover:text-red-700">
                           <input type="checkbox" className="h-5 w-5"/>
                           <div className="p-1 inline-flex text-center text-lg font-normal ">Price</div>
                        </a>

                        <a href="#" className="text-gray-400 hover:text-red-700">
                           <input type="checkbox" className="h-5 w-5"/>
                           <div className="p-1 inline-flex text-center text-lg font-normal ">Class</div>
                        </a>

                        <a href="#" className="text-gray-400 hover:text-red-700">
                           <input type="checkbox" className="h-5 w-5"/>
                           <div className="p-1 inline-flex text-center text-lg font-normal ">Subject</div>
                        </a>

                        <a href="#" className="text-gray-400 hover:text-red-700">
                           <input type="checkbox" className="h-5 w-5"/>
                           <div className="p-1 inline-flex text-center text-lg font-normal ">Edition</div>
                        </a>
                     </div>
               </nav>
            </nav>
         </aside>
      </nav>
   )
}
