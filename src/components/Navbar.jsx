import React from 'react'
import ToggleTheme from './ToggleTheme'



const Navbar = () => {

    return (
        <div className='w-full h-20 border-b border-b-slate-200 shadow-sm flex items-center justify-between py-6 px-12 bg-white dark:bg-gray-700 dark:text-slate-100 dark:border-b-gray-600'>
            <h1 className='text-2xl font-bold tracking-wide '>Where in the world?</h1>
            <ToggleTheme />

        </div>
    )
}

export default Navbar