import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import CountriesList from '../components/countrieslist'
import styles from '../css/styles.module.css'
import Form from '../components/form'

const Home: FC = () => {
  const [countriesData, setCountriesData] = useState<{
    list: Array<unknown>
    searchVal: string
    filtered: Array<unknown>
  }>({
    list: [],
    searchVal: '',
    filtered: [],
  })

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
    <div className={`bg-gray-100 `}>
      <header className="mb-6 bg-white pb-4 pt-4 md:mb-2">
        <div className="mx-auto flex w-11/12 items-center justify-between">
          <h1 className={`font-medium ${styles.red}`}>Where in the world?</h1>
          {/* replace button with toggle dark mode */}
          <button className="rounded px-4 py-2 font-bold text-black">
            dark
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
          <CountriesList {...countriesData} />
        </div>
    </div>
  )
}

export default Home; 