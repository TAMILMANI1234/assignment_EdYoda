import LOGO1 from '../assets/icon3.png'
import LOGO2 from '../assets/icon5.png'
import LOGO3 from '../assets/live_icon.png'
import LOGO4 from '../assets/icon4.png'
import LOGO5 from '../assets/icon6.png'
import Form from './Form'
function Body(){
    return(
        <div className="bg-custom-c-body h-full pt-10 pb-[1.1rem] ">
             
                    <div class="grid grid-cols-2 md:grid-cols-2 gap-4 text-white">
                        <div className="p-5 ml-[10rem]">
                              <div className="text-3xl" >
                                    <p>Access curated courses worth </p> 
                                    <p><span className="font-bold line-through decoration-red-500 decoration-4 " >₹ 18,500</span> just at <span className="font-bold text-custom-c-blue">₹99</span > per year!</p>
                              </div>
                              <div className='pt-5'>
                                 <ul>
                                    <li className='pt-5 '>
                                        <ul className='flex'>
                                            <li><img className='w-10 ' src={LOGO1}></img> </li>
                                            <li ><div className='pl-10'><span  className="font-bold text-custom-c-blue">100+</span> Jop relavant courses</div></li>
                                        </ul>  
                                    </li>
                                    <li  className='pt-12 '>
                                        <ul className='flex'>
                                            <li><img className='w-10' src={LOGO2}></img> </li>
                                            <li><div className='pl-10'> <span className="font-bold text-custom-c-blue">20,000+</span> Hours of content</div></li>
                                        </ul>  
                                    </li>
                                    <li  className='pt-12 '>
                                        <ul className='flex'>
                                            <li><img className='w-10' src={LOGO3}></img> </li>
                                            <li><div className='pl-10'><span  className="font-bold text-custom-c-blue">Exclusive</span> webinar access</div> </li>
                                         </ul>  
                                    </li>
                                    <li  className='pt-12 '>
                                        <ul className='flex'>
                                            <li><img className='w-10' src={LOGO4}></img> </li>
                                            <li><div className='pl-10'>Sponsorship worth <span  className="font-bold text-custom-c-blue"> ₹ 94,500</span></div> </li>
                                         </ul>  
                                    </li>
                                    <li  className='pt-12 '>
                                        <ul className='flex'>
                                            <li><img className='w-10' src={LOGO5}></img> </li>
                                            <li><div className='pl-10'><span  className="font-bold text-custom-c-blue">Ad Free</span> Learning experience </div></li>
                                        </ul>  
                                    </li>
                                    
                                 </ul>
                              </div>
                        </div>
                        <div className=''>
                             <Form/>
                        </div>
                        
                         
                        
                    </div>

        </div>
    )
}

export default Body;/* Back Ground */

  
