import { useTheme } from 'next-themes'

import Image from "next/image";
import { useRouter } from 'next/router'

function Description() {
  const {theme,setTheme} = useTheme()
  const router = useRouter();



    return(
        <>
           <div className="text-center bg-slate-200 py-1 px-1 ">
                 <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">A better way to  <br /><span className="text-blue-600">resolve your doubts </span></h1>
          </div>
        <div className="container my-1 px-1 mx-auto">

          <section className="mb-3  text-center md:text-left">
              <div className="flex flex-wrap items-center">
             
                <div className="grow-0 shrink-0 basis-auto w-full ">
                  <div className="px-6 py-2 md:px-12">
                    <p className=" mb-6 pb-2">
                    Welcome to coder community. You might be learning from any place, company or resource, we are here to help you. Post any of your doubt and there are other fellow coders along with our team to solve your doubts.
                    </p>
                    <div className="flex flex-wrap mb-6">
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>Code doubt
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>Learn from Anywhere | Get Help Here
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>Answers From Community
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>Mobile Application
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
                          </svg>Meet Like Minded People
                        </p>
                      </div>
                    </div>
                    <button type="button"
                      className="inline-block px-7 py-3 bg-gray-800  font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                      Join Now
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
