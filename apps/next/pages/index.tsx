import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import CountriesList from '../components/countrieslist'
import styles from '../css/styles.module.css'

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
      )
      const data = await response.json()
      setCountriesData({ ...countriesData, list: data })
    } catch (err) {
      throw err
    }
  }

  //filter countries using drop down
  const handleDropDown = (e: ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value
    setCountriesData({ ...countriesData, searchVal: region })
    const filterSearch = countriesData?.list?.filter(
      (country: any) => region === country.region
    )
    setCountriesData({ ...countriesData, filtered: filterSearch })
  }

  //filters countries by typing
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountriesData({ ...countriesData, searchVal: e.target.value })

    const results = countriesData?.list?.filter((country: any) => {
      if (
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return country
      }
    })
    setCountriesData({ ...countriesData, filtered: results })
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
          <form className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/3">
              <input
                type="text"
                className="bg-white block w-full rounded-lg pt-2 pb-2 text-sm font-medium md:mt-2"
                placeholder="Search for a country..."
                onChange={handleChange}
              />
            </div>
            <div className="mb-8 flex">
              <div className="mt-10">
                {/* Filter using drop down, select element */}
                <select
                  id="region"
                  className="rounded-lg pb-2 pl-2 pr-12 pt-2"
                  onChange={(e) => handleDropDown(e)}
                >
                  <option value="" disabled>
                    Filter by region
                  </option>
                  <option value="Africa">Africa</option>
                  <option value="Americas">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* List of countries */}
        <div className={`pb-2 md:flex md:justify-between md:flex-wrap md:items-between md:items-start ${styles.container}`}>
          <CountriesList {...countriesData} />
        </div>
      </div>
    </div>
  )
}

export default Home
