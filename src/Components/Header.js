import '../Css/Header.css';
function Headers(){
   return(
      <div>
          <nav className="bg-white h-[4.5rem]">
                <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto  ">
                       <span className="font-bold self-center text-2xl text-customer-c-loge">EDYODA</span>
                       <div className="dropdown p-4 ml-20">
                            <span>Courses </span><span className='text-sm ml-0'>▼</span>
                            <div className="dropdown-content">
                                <div className='p-3 hover:border-solid hover:border-2'><a href='#' >C</a></div>
                                <div className='p-3 hover:border-solid hover:border-2'><a href='#' >C++</a></div>
                                <div className='p-3 hover:border-solid hover:border-2'><a href='#' >Python</a></div>
                                <div className='p-3 hover:border-solid hover:border-2'><a href='#' >Java</a></div>  
                            </div>
                        </div>
                        <div className="dropdown p-4 ml-10">
                            <span>Programs </span><span className='text-sm ml-0'>▼</span>
                            <div className="dropdown-content">
                                <div className='p-3 hover:border-solid hover:border-2'><a href='#' >C</a></div>
                                <div className='p-3 hover:border-solid hover:border-2'><a href='#' >C++</a></div>
                                <div className='p-3 hover:border-solid hover:border-2'><a href='#' >Python</a></div>
                                <div className='p-3 hover:border-solid hover:border-2'><a href='#' >Java</a></div>  
                            </div>
                        </div>

                        <div>
                            <ul className='flex ml-[30rem]  w-[18rem]'>
                                <li className='p-6'><button><i class="fa fa-search"></i></button></li>
                                <li className='p-6 ml-10'><button>Login</button></li>
                                <li className='p-4'><button  className="text-white bg-custom-c-blue rounded-full  text-sm w-[10rem] h-10 ">Join Now</button></li>
                            </ul>
                        </div>

                </div>
              
             </nav>


      </div>
   )
}

export default Headers;

