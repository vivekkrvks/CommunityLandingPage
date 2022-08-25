import { useTheme } from 'next-themes'

import Image from "next/image";
import { useRouter } from 'next/router'

function Description() {
  const {theme,setTheme} = useTheme()
  const router = useRouter();



    return(
        <>
           <div className="text-center   py-1 px-1 ">
                 <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">Improve retention, growth and advocacy with the <br /><span className="text-blue-600">all-in-one community engagement platform </span></h1>
          </div>
        <div className="container my-1 px-1 mx-auto">

          <section className="mb-3  text-center md:text-left">
              <div className="flex flex-wrap items-center">
             
                <div className="grow-0 shrink-0 basis-auto w-full ">
                  <div className="px-6 py-2 md:px-12">
                    <p className=" mb-6 pb-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta corporis
                      voluptate ab error quam dolores doloremque, quae consectetur.
                    </p>
                    <div className="flex flex-wrap mb-6">
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>Noise cancelling
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>Touch controls
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>Clear calls
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>Quite mode
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>Secure
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>Comfortable
                        </p>
                      </div>
                    </div>
                    <button type="button"
                      className="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
          </section>
        
        </div>
        </>
)
}

export default Description;
