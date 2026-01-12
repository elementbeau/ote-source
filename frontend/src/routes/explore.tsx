import { createFileRoute } from '@tanstack/react-router'
import Navbar from "../components/Navbar"

export const Route = createFileRoute('/explore')({
  component: ExplorePage,
})

function ExplorePage() {
    return (
        <>
            {/* Explore Banner */}
            <section className='h-[100px] bg-gray-200'>
                <div className="mx-auto max-w-6xl h-full  grid items-stretch gap-24 lg:grid-cols-1">
                    {/* Explore Banner Image */}
                    <div className="h-full w-full">
                        <div className="h-full w-full rounded-2xl flex items-center justify-center bg-blue-300">
                            <span className="text-black text-sm">Explore Banner Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            { /** Trying a new sidebar */}
            <section className="bg-gray-200">
                <nav className="flex h-screen">
                    {/** This navbar needs to be fixed so that it will only be implemented on the side of the page alone */}
                    <Navbar /> 

                    <main className="flex-1 overflow-y-auto">

                        { /* Search Bar Banner */}
                        <div className="flex bg-white h-12 justify-start">
                            <div className="sm:w-100 m-1 justify-start">
                                <input
                                type="search"
                                placeholder="Explore books..."
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm justify-start"
                                />
                            </div>
                        </div>

                        { /** Book listing Rows and Columns */}
                        { /** NEW FLEX GRID */}
                        <h1 className="text-2x1 text-white">
                        <section className="h-auto items-center justify-center bg-orange-200">
                            <div className="mx-auto p-6 w-auto px-4 flex flex-wrap items-center gap-8  ">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((num) => (
                                    <div key={num} className="rounded-2xl border p-2 shadow-sm bg-white">
                                    <div className="aspect-9/16 place-items-center w-40 grid rounded-xl bg-blue-300 ">
                                        <span className=" text-sm text-black">Book {num}</span>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        </h1>

                        

                        {/** OLD FLEX GRID? */}
                        <h1 className="text-2xl text-white">
                        <section className="h-[400px] flex items-center justify-center bg-gray-200">
                            <div className="mx-auto max-w-6xl w-screen px-4 grid items-center gap-8 lg:grid-cols-5">

                                {/* Book Banner Images */}
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div key={num} className="rounded-2xl border p-2 shadow-sm bg-white">
                                    <div className="aspect-9/16 rounded-xl grid place-items-center bg-blue-300 ">
                                        <span className=" text-sm text-black">Book {num}</span>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                            {/*  Books */}
                        <section className="h-[400px] flex items-center justify-center bg-gray-300">
                            <div className="mx-auto max-w-6xl w-screen px-4 grid items-center gap-8 lg:grid-cols-5">

                                {/*  Book Banner Images */}
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div key={num} className="rounded-2xl border bg-white p-2 shadow-sm">
                                    <div className="aspect-9/16 rounded-xl bg-blue-300 grid place-items-center">
                                        <span className="text-black text-sm">Book {num}</span>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                            {/*  Books */}  
                        <section className="h-[400px] flex items-center justify-center bg-gray-200">
                            <div className="mx-auto max-w-6xl w-screen px-4 grid items-center gap-8 lg:grid-cols-5">

                                {/*  Book Banner Images */}
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div key={num} className="rounded-2xl border p-2 shadow-sm bg-white">
                                    <div className="aspect-9/16 rounded-xl grid place-items-center bg-blue-300 ">
                                        <span className=" text-sm text-black">Book {num}</span>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/*  Books */}
                        <section className="h-[400px] flex items-center justify-center bg-gray-300">
                            <div className="mx-auto max-w-6xl w-screen px-4 grid items-center gap-8 lg:grid-cols-5">

                                {/*  Book Banner Images */}
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div key={num} className="rounded-2xl border bg-white p-2 shadow-sm">
                                    <div className="aspect-9/16 rounded-xl bg-blue-300 grid place-items-center">
                                        <span className="text-black text-sm">Book {num}</span>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        </h1>
                    </main>
                </nav>
            </section>
                    {/** THis part will include the space next to the sidebar */}
                    {/** FIGURE THIS SHIT OUT */}
                    {/** This should use "flex wrap" so that it will dynamically scale with anyones monitor */}

            {/** this part will include anything at the bottom after the explore page */}
        </>
    )
}