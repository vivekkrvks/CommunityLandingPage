import { useTheme } from 'next-themes'
import { FcIdea } from "react-icons/fc";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";
import Image from "next/image";
import { useRouter } from 'next/router'

function Header({isHomePage}) {
  const {theme,setTheme} = useTheme()
  const router = useRouter();



    return(
        
<nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded  dark:bg-blue-900 light:bg-white">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://pensil-social.s3.ap-south-1.amazonaws.com/storage/community-logos/3c07bf92-9cd7-4eb6-91ba-7e1509f7cc44.webp" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Coder Community</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      <div className='mx-8  h-10 aligin-item cursor-pointer'
         onClick={() => setTheme(theme ==='light'?'dark':'light')}
        >
        {
        theme === 'light' ?
         <FcIdea className='w-10 h-10'/>:
         <WiMoonAltWaningCrescent5 className='w-10 h-10' />
         }
          
          
        </div>
  </div>
 
  </div>
</nav>

)
}

export default Header;

// <nav className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between">
//         <div className="px-6 w-full flex flex-wrap items-center justify-between">
//           <div className="flex items-center">         
//           </div>
//           <div className="navbar-collapse relative flex collapse grow items-center" id="navbarSupportedContentY">

//             <ul className="navbar-nav mr-auto flex lg:flex lg:flex-row">
//               {!isHomePage &&(<li className="nav-item">
//                 <a className="nav-link block pr-2 lg:px-2 py-2 hover:text-[#2D88E2] focus:text-[#2D88E2] transition duration-150 ease-in-out"  onClick={() => router.push(`/`)} data-mdb-ripple="true" data-mdb-ripple-color="light">GO Back to Home Page</a>
//               </li>)}
//              {isHomePage && (<> <li className="nav-item">
//                 <a className="nav-link block pr-2 lg:px-2 py-2 hover:text-[#2D88E2] focus:text-[#2D88E2] transition duration-150 ease-in-out" onClick={() => sample1(searchData1)}href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Sample Data 1</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link block pr-2 lg:px-2 py-2 hover:text-[#2D88E2] focus:text-[#2D88E2] transition duration-150 ease-in-out" onClick={() => sample2(searchData2)}href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Sample Data 2</a>
//               </li></>)}
             
//             </ul>
//           </div>
//         </div>
//         <div className='mx-8  h-10 aligin-item'
//          onClick={() => setTheme(theme ==='light'?'dark':'light')}
//         >
//         {
//         theme === 'light' ?
//          <FcIdea className='w-10 h-10'/>:
//          <WiMoonAltWaningCrescent5 className='w-10 h-10' />
//          }
          
          
//         </div>
    
  
//       </nav>