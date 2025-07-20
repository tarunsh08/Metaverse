import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
    return (
        <div>
            <div className='bg-[url(https://images.unsplash.com/photo-1612404730960-5c71577fca11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFyaW98ZW58MHx8MHx8fDA%3D)] h-screen bg-cover bg-center'>
                <div className='flex items-center justify-center h-full'>
                    <div className="box w-1/2 h-1/2 bg-white/10 backdrop-blur-lg border border-black rounded-lg p-8 flex flex-col justify-between items-center">
                        <ol className='text-lg'>
                            <li><i className="ri-git-commit-fill"></i> You may need to wait for some time, till we are ready.</li>
                            <li><i className="ri-git-commit-fill"></i> Please keep pateinace.</li>
                            <li><i className="ri-git-commit-fill"></i> Currently Only Supports Desktop,Laptops,etc.</li>
                            <li><i className="ri-git-commit-fill"></i> Mobile Support will be Adding soon.</li>
                        </ol>
                        <button 
          onClick={() => navigate('/space')}
          className='bg-white/10 backdrop-blur-lg border border-black rounded-lg text-black py-2 px-4 items-center hover:bg-black hover:text-white transition-colors'>
          Join the world
        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
