function Form(){
    return(
        <div className="box-border   w-[30rem]   border-1  rounded-md text-black bg-white text-lg">
             <div className="flex p-5"> 
                 <ul className="ml-20">
                    <li className="rounded-full w-[2.9rem] h-[3rem] text-center p-3 text-white bg-customer-c-loge">1 </li>
                    <li className="text-sm">Sign Up</li>
                 </ul>
                 <ul className="ml-32">
                    <li className="rounded-full w-[2.9rem] h-[3rem] text-white text-center p-3 bg-customer-c-loge"> 2 </li>
                    <li className="text-sm">Subcribe</li>
                 </ul>
             </div>
             <p className="text-center font-bold text-lg">Select your subcription plan</p>
             <div className="p-2">
                <form>
                         
                        <div class="flex items-center mb-4 p-2   border-2   bg-gray-200 rounded-md">
                           <div class="relative h-9 text-center">
                                 <span className=" absolute h-5   w-[6rem] -left-4 -top-3 ... rounded-md   ml-[5rem] bg-red-400 text-[0.7rem] ">Offer expired</span>
                              </div>
                     
                            <input disabled id="default-radio-1" type="radio" value="" name="subcripton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label class="ml-2 text-sm font-medium ">12 Months subcription</label>
                            <span className="ml-[11rem]">
                                <table>
                                    <tr className="text-sm">
                                        <td>Total </td>
                                        <td>₹ 99</td>
                                    </tr>
                                    <tr className="text-xs">
                                        <td>
                                            <div className="">
                                                ₹8/mo
                                            </div>
                                        </td>   
                                    </tr>
                                </table>
                             </span>
                        </div>
                        <div class="flex items-center mb-4 p-2  border-2 rounded-md border-lime-600">
                              <div class="relative h-9 text-center">
                                 <span className=" absolute h-5   w-[6rem] -left-4 -top-3 ... rounded-md   ml-[5rem] bg-green-400 text-[0.7rem] ">Recommended</span>
                              </div>
                            <input   id="default-radio-2" type="radio" value="" name="subcripton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label   class="ml-2 text-sm font-medium ">12 Months subcription</label>
                            <span className="ml-[11rem]">
                                <table>
                                    <tr className="text-sm">
                                        <td>Total </td>
                                        <td>₹ 99</td>
                                    </tr>
                                    <tr className="text-xs">
                                        <td>
                                            <div className="">
                                                ₹8/mo
                                            </div>
                                        </td>   
                                    </tr>
                                </table>
                             </span>
                        </div>
                        <div class="flex items-center mb-4  p-2  border-2 rounded-md">
                            <input id="default-radio-3" type="radio" value="" name="subcripton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  class="ml-2 text-sm font-medium  ">6 Months subcription</label>
                            <span className="ml-[11rem]">
                                <table>
                                    <tr className="text-sm">
                                        <td>Total </td>
                                        <td>₹ 99</td>
                                    </tr>
                                    <tr className="text-xs">
                                        <td>
                                            <div className="">
                                                ₹8/mo
                                            </div>
                                        </td>   
                                    </tr>
                                </table>
                             </span>
                        </div>
                        <div className="flex items-center  mb-4 p-2  border-2 rounded-md">
                            <input  id="default-radio-4" type="radio" value="" name="subcripton" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  class="ml-2 text-sm font-medium    ">3 Months subcription</label>
                            <span className="ml-[11rem]">
                                <table>
                                    <tr className="text-sm">
                                        <td>Total </td>
                                        <td>₹ 99</td>
                                    </tr>
                                    <tr className="text-xs">
                                        <td>
                                            <div className="">
                                                ₹8/mo
                                            </div>
                                        </td>   
                                    </tr>
                                </table>
                             </span>
                        </div>
                        
                        <div className=" items-center  mb-4 p-2 border-t-[3px]  ">
                            <div className="mb-1" >
                                <ul className="flex text-xs">
                                    <li>Subscription Fee</li>
                                    <li className="ml-[18rem]">₹18,500</li>
                                </ul>
                            </div>
                            <div className="flex items-center text-sm  mb-4 p-4  border-2 border-rose-500 bg-red-300 text-rose-700 rounded-md">
                                <div className="absolute p-3 ">
                                     <ul>
                                        <li><p>Limited time offer</p> </li>
                                        <li> <p className="ml-5">Offer valid till 25th March 2023</p></li>
                                     </ul>
                                  </div>
                                    <span className="ml-[22rem]">
                                        - ₹18,401
                                    </span>
                             
                            </div>
                            <div className="mb-1 " >
                                <ul className="flex text-xs">
                                    <li>Total (Incl. of 18% GST)</li>
                                    <li className="ml-[17rem]">₹149</li>
                                </ul>
                            </div>
                            

                        </div>
                        <div>
                            <ul className="flex">
                                <li className="pr-2">
                                   <button className="text-center p-2 border-2 border-rose-500 w-[14rem]">cancel</button>
                                </li>
                                <li className="pl-1">
                                <button className="text-center p-2 border-2 border-lime-600 bg-green-500 text-white w-[14rem]">proceed to pay</button>
                                </li>
                            </ul>
                        </div>
                        <div className=" p-2">
                            <img className="w-[7rem]" src="https://cdn.razorpay.com/static/assets/merchant-badge/badge-dark.png"></img>
                        </div>
                        

                </form>
             </div>
        </div>
    )
}
export default Form;