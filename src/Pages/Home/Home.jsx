import "./Home.css";



function Home() {

  
  return (
    <div className="min-h-screen">
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row sjsjsj">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                Yeni <br className="hidden md:block" />
                HESAP OLUŞTUR{" "}
              </h1>
              <div className="FrmHesapoluTurProcess1 w-[69px] h-2 justify-start items-start gap-1 inline-flex">
                <div  className="Rectangle2573 w-11 h-2 opacity-60 bg-neutral-200 rounded-[51px]" />
                <div className="Rectangle2574 w-2 h-2 opacity-20 bg-neutral-200 rounded-[51px]" />
                <div className="Rectangle2576 w-[9px] h-2 opacity-20 bg-neutral-200 rounded-[51px]" />
              </div>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-black rounded-2xl	 shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-white">
                  Sign up for updates
                </h3>
                <form
                  style={{
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium text-white"
                    >
                      E-posta
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="email"
                      className="w-full h-7 px-4 py-4 mb-2 text-xs transition duration-200 bg-gray-300 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline placeholder-gray-500"
                      id="email"
                      name="email"
                    />

                    <div className="mb-2 text-white">
                      <input
                        type="checkbox"
                        id="haberler"
                        name="haberler"
                        value="haberler"
                        className="h-4 w-6 bg-gray rounded-full"
                      />
                      <label
                        htmlFor="haberler"
                        className="ml-2 text-sm font-thin"
                      >
                        Haberler, özel teklifler, geri bildirim anketleri ve
                        oynanış testi davetleri al.
                      </label>
                    </div>
                  </div>

                  <div className="mt-2">
                    <button
                    
                      className="inline-flex items-center text-base justify-center w-full h-30 px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                    >
                      Devam Et
                    </button>
                    <a
                      href="/"
                      className="mt-2 text-base text-gray-600 text-center grid underline"
                    >
                      Hesabın var mı?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
<footer className="px-4 divide-y dark:bg-black dark:text-gray-100">
  <div className="container flex flex-col py-10 mx-auto  space-y-4 lg:flex-row">
    <div className="lg:w-1/7 mr-10">
      <img
        src="./logo.png"
        alt="Company Logo"
        className="dark:text-gray-900"
      />
    </div>
    <div className="flex flex-cols-2 text-sm gap-x-12 gap-y-4 lg:w-2/3 sm:flex-cols-4">
      <div className="space-y-3">
        <h3 className="tracki uppercase dark:text-gray-50">CAREERS</h3>
      </div>
      <div className="space-y-3">
        <h3 className="tracki uppercase dark:text-gray-50"> ABOUT</h3>
      </div>
      <div className="space-y-3">
        <h3 className="uppercase dark:text-gray-50">SUPPORT</h3>
      </div>
      <div className="space-y-3">
        <div className="uppercase dark:text-gray-50"> SUPPORT</div>
      </div>
      <div className="space-y-3">
        <div className="uppercase dark:text-gray-50"> CONTACT US</div>
      </div>
      <div className="space-y-3">
        <div className="uppercase dark:text-gray-50"> Devam Et</div>
      </div>
    </div>
  </div>
  <div className="py-6 text-sm text-center dark:text-gray-400">
  <div className="flex flex-cols-2 text-sm  justify-between	">
      <div className="space-y-3 ml-3">
        <h3 className="tracki uppercase dark:text-gray-50">All Rights Reserved @CompanyName</h3>
      </div>
      <div className="space-y-3">
        <h3 className="tracki uppercase dark:text-gray-50"> Privacy Policy | Terms of Services | Code of Conduct </h3>
      </div>
      
    </div>
  </div>
</footer>


      </div>
    </div>
  );
}

export default Home;
