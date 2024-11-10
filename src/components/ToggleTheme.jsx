import React from 'react'
import { BiSun } from 'react-icons/bi'
import { BiMoon } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/themeSlice'

const ToggleTheme = () => {
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.theme.darkMode)

    return (
        <div className='flex flex-row items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-600'  onClick={() => dispatch(toggleTheme())}>
            {darkMode ? <BiSun className='text-xl text-slate-800 dark:text-slate-100 ' /> : <BiMoon className='text-xl text-slate-800 dark:text-slate-100' />}
            <p className='text-sm font-medium'>{darkMode ? 'Dark theme' : 'Dark theme'}</p>
        </div>
    )
}

export default ToggleTheme