import { useTheme } from 'next-themes'

import Image from "next/image";
import { useRouter } from 'next/router'

function FaqComponent() {
  const {theme,setTheme} = useTheme()
  const router = useRouter();



    return(
        <div class="container my-2 px-6 mx-auto">
        
          <section class="mb-32 text-gray-800">
            <div class="grid md:grid-cols-2 gap-4">
              <div class="mb-6 md:mb-0">
                <h2 class="text-3xl font-bold mb-6">Frequently asked questions</h2>
        
                <p class="text-gray-500">
                  Didn't find your answer in the FAQ?
                  <a href="#!"
                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300">Contact
                    our sales team</a>.
                </p>
              </div>
        
              <div class="mb-6 md:mb-0">
          {faqData.map((v,i) => (
            <>
<p class="font-bold mb-4">{v.question}</p>
                <p class="text-gray-500 mb-12">
                 ({v.solution}
                </p>
            </>
          ))}
                
        
              
              </div>
            </div>
          </section>
        
        </div>

)
}

export default FaqComponent;

let faqData = [
{
  question:"Can i get solution from my code ?",
  solution:"Post your quesries into the desired group and get instant support from developers"
},
{
  question:"Can i learn from anywhere ?",
  solution:"No matter from where you are learning from ? If yout get stuck in your code, come here and get resolved."
},
{
  question:"Can i get Answers From Community ?",
  solution:"Get answers quickly from your desired community, like JAVASCRIPT Community, etc"
},
{
  question:"Is there Mobile Application available ?",
  solution:"Get Notifications quickly on mobile app available on Google Play Store, Apple Store"
},

]
