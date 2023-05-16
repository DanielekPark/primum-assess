import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import CountriesList from '../components/countrieslist'
import styles from '../css/styles.module.css'
import Form from '../components/form'

const Home: FC = () => {
  const [countriesData, setCountriesData] = useState<{
    list: Array<{name: {common: string}}>
    searchVal: string
    filtered: Array<unknown>
  }>({
    list: [],
    searchVal: '',
    filtered: [],
  }); 
  const [darkMode, setDarkMode] = useState<boolean>(false); 

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/independent?status=true'
      ); 
      const data = await response.json(); 
      setCountriesData({ ...countriesData, list: data });
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{backgroundColor: darkMode ? "#202d36" : "#fff"}}  className={`bg-gray-100 `}>
      <header className="mb-6 pb-4 pt-4 md:mb-2">
        <div className="mx-auto flex w-11/12 items-center justify-between">
          <h1 style={{color: darkMode ? "#fff" : "#1f2d38"}} className={`font-medium`}>Where in the world?</h1>
          <button style={{color: darkMode ? "#fff" : "#1f2d38"}} onClick={() => setDarkMode(!darkMode)} className="rounded px-4 py-2 font-bold text-black flex">
          <svg style={{marginRight: '0.5rem'}} className="" fill={darkMode ? "#fff" : "#1f2d38"} height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/></svg>  
            Dark Mode
          </button>
        </div>
      </header>
      <div className="mx-auto w-11/12">
        <div>
          <Form
          countriesData={countriesData}
          setCountriesData={setCountriesData}
        />
        </div>

        {/* List of countries */}
      </div>
        <div className={`pb-2 md:flex md:justify-between md:flex-wrap md:items-between md:items-start ${styles.container} w-11/12 mx-auto`}>
          <CountriesList list={countriesData.list}
              filtered={countriesData.filtered}
              searchVal={countriesData.searchVal}
              darkMode={darkMode} />
        </div>
    </div>
  )
}

export default Home; 