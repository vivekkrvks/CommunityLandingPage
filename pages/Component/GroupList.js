import { useTheme } from 'next-themes'

import Image from "next/image";
import { useRouter } from 'next/router'

function GroupList() {
  const {theme,setTheme} = useTheme()
  const router = useRouter();



    return(
        <div className="container my-2 px-6 mx-auto">
        
          <section className="mb-3 text-gray-800 text-center">
        
            <h2 className="text-3xl font-bold mb-12 pb-4 text-center">Latest articles</h2>
        
            <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            
        {comData.map((v,i) => (
          <div className="mb-0">
                <div className="relative block bg-white rounded-lg shadow-lg">
                  <div className="flex">
                    <div
                       className="  relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"

                      data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img src={v.image} className="w-full" />
                      <a href="#!">
                        <div
                          className="absolute  top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          ></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg mb-3">{v.title}</h5>
                    <p className="text-gray-500 mb-4">
                      <small>User Joined <u>{v.userCount}</u> 
                        </small>
                    </p>
                    <p className="mb-4 pb-2">
                      {v.description}
                    </p>
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Read
                      more</a>
                  </div>
                </div>
              </div>
        ))}
              
            </div>
        
          </section>
        
        </div>

)
}

export default GroupList;

let comData = [
    {
        title:"Javascript Community",userCount:"1200",description:"Learn and help from each other. It doesn't matter from where you are learning, you can ask your doubts here. We all are here to help",image:"https://pensil-social.s3.ap-south-1.amazonaws.com/storage/group-banners/5ff6d695-41cd-4b0d-8026-d395ac0b0ce8./var/www/pensil-marketplace-backend/tmp/tmp-400-1655539036888"
    },
    {
        title:"Python Community",
        userCount:"2500",
        description:"Learn and help from each other. It doesn't matter from where you are learning, you can ask your doubts here. We all are here to help",
        image:"https://pensil-social.s3.ap-south-1.amazonaws.com/storage/group-banners/07983b50-81a9-4fbd-856a-c4970e35d72c./var/www/pensil-marketplace-backend/tmp/tmp-428-1655558331489"
    },
    {
        title:"Java Community",
        userCount:"5000",
        description:"Learn and help from each other. It doesn't matter from where you are learning, you can ask your doubts here. We all are here to help",
        image:"https://pensil-social.s3.ap-south-1.amazonaws.com/storage/group-banners/515587cd-81fc-499c-9479-50b6c08e9c0d./var/www/pensil-marketplace-backend/tmp/tmp-415-1655551106206"
    },
]
