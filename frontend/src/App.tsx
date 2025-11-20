function App() {
  return (
    // Webpage Background
    <div className="min-h-dvh bg-gray-400">

      {/* Navigation Bar */}
      <header className="sticky bg-white/90 border-b">
        <div className="mx-auto max-w-8xl h-16 px-4 flex items-center gap-10">

          {/* Title/Logo */}
          <a className="font-semibold">OpenTextBookExchange</a>

          {/* Page Choices */}
          <nav className="hidden sm:flex gap-10 text-sm text-gray-600">
            <a href="#home" className="hover:text-gray-900 text-lg pl-40">Home</a>
            <a href="#explore" className="hover:text-gray-900 text-lg pl-10 border-l border-gray-300">Explore</a>
            <a href="#about" className="hover:text-gray-900 text-lg pl-10 border-l border-gray-300">About</a>
          </nav>

          {/* Search Bar */}
          <div className="w-40 sm:w-64 m-auto">
            <input
              type="search"
              placeholder="Search books..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Sign in */}
          <a href="#sign-in" className="rounded-lg px-3 py-2 bg-gray-900 text-white text-sm ml-auto">Sign in</a>
        </div>
      </header>

      {/* Main Banner */}
      <section className="h-[450px] bg-gray-200">
        <div className="mx-auto max-w-6xl h-full px-4 grid items-stretch gap-24 lg:grid-cols-2">

          {/* Banner Image */}
          <div className="h-full w-full">
            <div className="h-full w-full rounded-xl flex items-center justify-center bg-blue-300">
              <span className="text-black text-sm">Banner image placeholder</span>
            </div>
          </div>

          {/* Banner Text */}
          <div className="text-center">
            <h1 className="mt-3 font-bold text-2xl">Find, Sell, or Trade Your Textbooks</h1>
            <p className="mt-3 text-gray-600">Browse listings from local students.</p>
            <div className="mt-6 flex gap-3">
              <a className="rounded-xl px-5 py-3 bg-gray-900 text-white hover:bg-gray-800">Browse</a>
            </div>
          </div>
        </div>
      </section>
        
      {/* Popular Books Banner */}
      <section className="h-[600px] flex items-center justify-center bg-gray-800">
        <div className="mx-auto max-w-6xl w-full px-4 grid items-center gap-8 lg:grid-cols-4">

          {/* Banner Images */}
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="rounded-2xl border p-2 shadow-sm bg-white">
              <div className="aspect-9/16 rounded-xl grid place-items-center bg-blue-300 ">
                <span className=" text-sm text-black">Book {num}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Books Banner */}
      <section className="h-[600px] flex items-center justify-center bg-gray-400">
        <div className="mx-auto max-w-6xl w-full px-4 grid items-center gap-8 lg:grid-cols-4">

          {/* Banner Images */}
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="rounded-2xl border bg-white p-2 shadow-sm">
              <div className="aspect-9/16 rounded-xl bg-blue-300 grid place-items-center">
                <span className="text-black text-sm">Book {num}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement Banner */}
      <section className="h-[300px] flex items-center justify-center text-center bg-gray-200">
        <div className="mx-auto max-w-6xl w-full px-4 grid items-center">

          {/* Banner Text */}
          <div>
            <h1 className="font-bold text-2xl mb-4">Mission Statement</h1>
            <p className=" text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat non velit eget aliquet. Phasellus tristique viverra enim vitae ultrices. 
              Ut fermentum nulla et nisi commodo aliquet. Aenean dictum odio convallis neque tempor feugiat. Curabitur varius magna odio. Curabitur fringilla iaculis leo et consectetur. 
              Etiam ultrices pulvinar nunc, non tristique neque tempus sed. Etiam aliquam, mi sit amet sagittis semper, dui eros sollicitudin augue, non blandit arcu tellus vitae justo. 
              In at tortor laoreet, auctor mi eu, tincidunt turpis. Nullam orci nisl, consequat eget volutpat feugiat, bibendum quis nunc.
            </p>
          </div>
        </div>
      </section>

      {/* Site Map Banner */}
      <section className="h-[300px] bg-gray-900 text-white flex items-center">
        <div className="mx-auto max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-24">
          
          {/* Contact Info */}
          <div className="text-left space-y-2">
            <h3 className="font-semibold text-lg mb-3">Contact Us!</h3>
            <p className="text-med text-gray-300">
              Open Textbook Exchange<br />
              Portland, OR<br />
              main@opentextbookexchange.shop<br />
              (012) 345-6789
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-left mx-auto">
            <h3 className="font-semibold text-lg mb-3">Navigation</h3>
            <ul className="text-med text-gray-300 space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#explore" className="hover:text-white">Explore</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#sign-in" className="hover:text-white">Sign In</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-left mx-auto">
            <h3 className="font-semibold text-lg mb-3">Social</h3>
            <ul className="text-med text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="bg-gray-950 text-gray-400 text-sm">
        <div className="mx-auto max-w-6xl w-full px-6 py-4 flex items-center justify-between">
          <p>© {new Date().getFullYear()} OpenTextBookExchange</p>
          <p>Designed for Oregon Tech Students</p>
        </div>
      </footer>
    </div> 
  )
}

export default App
