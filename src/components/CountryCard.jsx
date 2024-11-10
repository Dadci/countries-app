import React from 'react'
import { useNavigate } from 'react-router'

const CountryCard = ({ country }) => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-start  bg-white border border-slate-300 rounded-md shadow-sm w-full pb-6 cursor-pointer dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600 dark:shadow-lg' onClick={() => navigate('/country', {
            state: { country }
        })} >
            {/* <div className=''> */}
            <img src={country.flags.png} alt={country.name.common} className='w-full h-[200px] object-cover rounded-t-md mb-2' />
            {/* </div> */}
            <div className=' flex flex-col items-start px-6 gap-2'>
                <h1 className='text-lg font-semibold pt-4 text-slate-800 dark:text-slate-100 '>{country.name.common}</h1>
                <p className='text-sm text-slate-500 dark:text-slate-400'>Population: {country.population}</p>
                <p className='text-sm text-slate-500 dark:text-slate-400 '>Region: {country.region}</p>
                <p className='text-sm text-slate-500 dark:text-slate-400 '>Capital: {country.capital}</p>

            </div>
        </div>
    )
}

export default CountryCard