import React from 'react'
import { useLocation, useNavigate } from 'react-router'

const CountryDetail = () => {

    const navigate = useNavigate()
    const location = useLocation()

    // get data from location state
    const country = location.state.country

    


    return (
        <div className=' flex flex-col items-start px-12 py-6 gap-8 bg-slate-100  dark:bg-slate-800 min-h-screen w-full  '>

            <button
                className='bg-slate-800 text-white dark:bg-slate-600 dark:text-slate-100 px-4 py-2 rounded-md text-sm font-medium'
                onClick={() => navigate(-1)}
            > Go back</button>

            <div className='flex md:flex-row items-center md:gap-32 gap-12 w-full mt-8 flex-col'>
                <div className='md:w-[1200px] h-full sd:w-full'>
                    <img src={country.flags.svg} alt={country.name.common} className=' rounded-md w-full' />
                </div>
                <div className='w-full'>
                    <h1 className='text-3xl font-bold text-slate-800 md:mb-8 mb-4 dark:text-slate-100'>{country.name.common}</h1>


                    <div className='flex md:flex-row flex-col md:gap-44 gap-12  text-slate-500 dark:text-slate-400 w-full'>
                        <div className='flex flex-col gap-2'>

                            <p><span className='font-semibold'>Population:</span> {country.population}</p>
                            <p><span className='font-semibold'>Region:</span> {country.region}</p>
                            <p><span className='font-semibold'>Capital:</span> {country.capital}</p>
                            <p><span className='font-semibold'>Area:</span> {country.area} km<sup>2</sup></p>

                        </div>


                        <div className='flex flex-col gap-2'>
                            <p><span className='font-semibold'>Languages:</span> {Object.values(country.languages).join(', ')}</p>
                            <p><span className='font-semibold'>Currencies:</span> {Object.values(country.currencies).map((currency) => currency.name).join(', ')}</p>
                        </div>
                    </div>
                    <div className=' flex items-center w-full text-slate-500  dark:text-slate-400 md:mt-8 mt-12 '>
                        <p><span className='font-semibold pr-2'>Border Countries:</span></p>
                        <div className='flex flex-row flex-wrap items-center gap-2'>
                            {country.borders?.map((border, index) => (
                                <span key={index} className='p-2 text-sm border border-slate-300 dark:border-slate-600 shadow-md dark:shadow-lg '>
                                    {border}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetail