import { useTheme } from 'next-themes'

import Image from "next/image";
import { useRouter } from 'next/router'
import HeroImg from "./../Assets/Images/codercom.png"

function HeroSection() {
  const {theme,setTheme} = useTheme()
  const router = useRouter();



    return(
        
<section  >
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to <br /><span class="text-blue-600">Coder Community</span></h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl "> You might be learning from any place, company or resource, we are here to help you. Post any of your doubt and there are other fellow coders along with our team to solve your doubts.</p>
       
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-600 text-gray-300 border border-gray-500 rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-gray-500  ">
                Join NOW
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://pensil-community-landing-page.netlify.app/assets/images/hero-1.jpg" alt="mockup" />
        </div>                
    </div>
</section>

)
}

export default HeroSection;
