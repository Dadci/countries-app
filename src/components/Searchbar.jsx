import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { setSearchResults, setSearchTerm } from '../store/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const Searchbar = ({ countries }) => {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search.searchTerm)

    const handleSearch = (e) => {
        const searchTerm = e.target.value
        dispatch(setSearchTerm(searchTerm))

        const filteredResults = countries
            .filter(country =>
                country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => a.name.common.localeCompare(b.name.common))

        dispatch(setSearchResults(filteredResults))
    }

    return (
        <div className='flex items-center relative'>
            <BiSearch className='text-slate-500 text-xl absolute m-4 dark:text-slate-100' />
            <input type="search" value={search} onChange={handleSearch} placeholder='Search for a country...' size={48}  className='p-4 text-sm font-medium shadow-md rounded-sm pl-12 dark:bg-slate-700 dark:text-slate-100 ' />
        </div>
    )

}

export default Searchbar