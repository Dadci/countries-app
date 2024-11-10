import React from 'react'
import { useDispatch } from 'react-redux'
import { setRegionFilter } from '../store/filterSlice'


const Filter = () => {
    const dispatch = useDispatch()
    const handleFilter = (e) => {
        dispatch(setRegionFilter(e.target.value))
    }
    return (
        <div>
            <select name="region" id="region"
                typeof='filter'
                onChange={handleFilter}
                slot='filter'
                multiple={false}

                className='py-4 px-6 text-sm font-medium shadow-md rounded-sm text-slate-500 dark:text-slate-100 dark:bg-slate-700 p-4'>
                <option value="">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctic">Antarctic</option>

            </select>
        </div>
    )
}

export default Filter