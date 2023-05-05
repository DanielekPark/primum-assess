import React, {FC, useState, useEffect, Fragment, ChangeEvent } from 'react'
import { HomeScreen } from 'app/features/home/screen'
import CountriesList from '../components/countrieslist';
import { count } from 'console';

const Home: FC = () => {
  const [countriesData, setCountriesData] = useState<{list: Array<unknown>, searchVal: string, filtered: Array<unknown>}>({
    list: [],
    searchVal: "",
    filtered: [],
  }); 

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


  //filter countries using drop down
  const handleDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value; 
    setCountriesData({...countriesData, searchVal: region}); 
    const filterSearch = countriesData?.list?.filter((country: any) => region === country.region);     
    setCountriesData({...countriesData, filtered: filterSearch}); 
  }

  //filters countries by typing
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountriesData({...countriesData, searchVal: e.target.value})
    
    const results = countriesData?.list?.filter((country: any) => {
      if(country.name.common.toLowerCase().includes(e.target.value.toLowerCase())){
        return country; 
      }
    }); 
    setCountriesData({...countriesData, filtered: results})
  }

  useEffect(() => {
    fetchData()
  }, [])

  // useEffect(() => {
  //   console.log(countriesData.searchVal)
  // }, [countriesData])


  return (
    <div className="pt-8">
      <header className="pb-8">
        <div className="mx-auto flex w-11/12 items-center justify-between">
          <h1>Where in the world?</h1>
          {/* replace button with toggle dark mode */}
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white">
            button
          </button>
        </div>
      </header>
      <div className="mx-auto w-11/12">
        <div>
          <form>
            <input
              type="text"
              className="block rounded-lg bg-blue-300 p-2.5 text-sm"
              placeholder="Search for a country..."
              onChange={handleChange}
            />
            <div className="flex mb-8">
              <div className="mt-10">
                <select id="region" className="" onChange={(e) => handleDropDown(e)}>
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
        <div className="">
          <CountriesList {...countriesData} />
        </div>
      </div>
    </div>
  )
}

export default Home; 