import Card from "../components/card";




export default function Work() {

    return (
        <div className="body bg-zinc-900">

            <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full  ">



                <main id="content" role="main">
                    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                        <h1 className="block text-2xl font-bold text-white sm:text-4xl">Some of my previous work</h1>
                      
                      

                            {/* <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4" href="../examples.html">
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Back to examples
                  </a> */}
                        
                        <Card />
                    </div>
                </main>











            </div>
        </div>
    )
}
