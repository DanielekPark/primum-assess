import React, { useState, useEffect, Fragment } from 'react'
import { HomeScreen } from 'app/features/home/screen'

export default function Home() {
  const [countriesData, setCountriesData] = useState({
    list: [],
    searchVal: '',
    filtered: [],
  })

  //fetches data for countries
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

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.table(countriesData.list)
  }, [countriesData])

  return (
    <div className="pt-8">
      <header className="pb-8">
        <div className="mx-auto flex w-11/12 items-center justify-between">
          <h1>Where in the world?</h1>
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white">
            button
          </button>
        </div>
      </header>
      <div className="mx-auto w-11/12">
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="block rounded-lg bg-blue-300 p-2.5 text-sm"
              placeholder="Search for a country..."
              list="region"
            />
            <div className="flex mb-8">
              <div className="mt-10">
                <select id="region" className="">
                  <option value="" disabled>
                    Filter by region
                  </option>
                  <option value="Africa">Africa</option>
                  <option value="America">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="">
          {countriesData?.list?.map((country: any, index: number) => {
            return (
              <div className="max-w-sm rounded mx-auto mb-8 " key={`react-key${index}`}>
                <img
                  className="w-full"
                  src={country.coatOfArms.png}
                  alt="Flag"
                />
                <div className="px-8 py-4">
                  <p className="mb-2 text-xl font-bold">{country.altSpellings[1]}</p>
                  <p className="text-base text-gray-700">
                    Population: {country.population}
                  </p>
                  <p className="text-base text-gray-700">
                    Region: {country.region}
                  </p>
                  <p className="text-base text-gray-700">
                    Capital: {country.capital[0]}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
