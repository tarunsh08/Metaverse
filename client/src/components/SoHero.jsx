import { SignInButton } from '@clerk/clerk-react'
import React from 'react'

const SoHero = () => {
    return (
        <div>
            <div className='bg-[url(https://images.unsplash.com/photo-1612404730960-5c71577fca11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFyaW98ZW58MHx8MHx8fDA%3D)] h-screen bg-cover bg-center'>
                <div className='flex items-center justify-center h-full'>
                    <div className="box w-1/2 h-1/2 bg-white/10 backdrop-blur-lg border border-black rounded-lg p-8 flex flex-col justify-between items-center">
                        <ol className='text-lg'>
                            <li><i className="ri-git-commit-fill"></i> Sign In to enter the Metaverse World</li>
                        </ol>
                        <button className='bg-white/10 backdrop-blur-lg border border-black rounded-lg text-black py-2 px-4 items-center hover:bg-black hover:text-white transition-colors'><SignInButton/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoHero
