import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Loading from '../components/Loading'
import Filter from '../components/Filter'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryCard from '../components/CountryCard'
import { useSelector } from 'react-redux'



const Home = () => {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    const url = 'https://restcountries.com/v3.1/all'



    useEffect(() => {

        const fetchCountries = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url)
                const result = response.data
                setCountries(result)
                setLoading(false)
                console.log(result);

            } catch (error) {
                setLoading(false)
                console.log(error);

            }
        }
        fetchCountries()
    }, [])

    const searchResults = useSelector(state => state.search.searchResults)
    const filterResults = useSelector(state => state.filter.regionFilter)

    const filteredCountries = countries.filter(country => {
        if (filterResults) {

            return country.region === filterResults;
        }
        return true;
    })




    return (
        <div className='w-full min-h-screen bg-slate-100 dark:bg-gray-800'>

            {loading ? <Loading /> : (<>

                <div className='flex md:flex-row item center justify-between py-8 px-12 flex-col gap-6'>
                    <Searchbar countries={countries} />
                    <Filter countries={countries} />
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 place-items-center py-8 px-12 gap-10 sm:grid-cols-1'>
                    {searchResults.length > 0 ? searchResults.map((country, index) => (
                        <CountryCard key={index} country={country} />
                    )) : filteredCountries.map((country, index) => (
                        <CountryCard key={index} country={country} />
                    ))}






                </div>
            </>)
            }

        </div >
    )
}

export default Home