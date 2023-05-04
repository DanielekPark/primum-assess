import React, {FC, useState, useEffect, Fragment } from 'react'
import { HomeScreen } from 'app/features/home/screen'
import CountriesList from '../components/countrieslist';

const Home: FC = () => {
  const [countriesData, setCountriesData] = useState<{list: Array<unknown>, searchVal: string, filtered: Array<unknown>}>({
    list: [],
    searchVal: '',
    filtered: [],
  }); 

  //fetches data for countries
  //useCallback post https://stackoverflow.com/questions/60835660/proper-use-of-usecallback
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
    const filterSearch = countriesData?.list?.filter((country: any) => e.target.value === country.region); 
    setCountriesData({...countriesData, filtered: filterSearch}); 
    console.log(countriesData.filtered)
  }

  //filters countries by typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.table(countriesData.filtered)
  }, [countriesData])


  //implement the filter feature
  //set filtered key value pair to have a copy of the key value pair list
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
          <form>
            <input
              className="block rounded-lg bg-blue-300 p-2.5 text-sm"
              placeholder="Search for a country..."
              list="region"
              onChange={(e) => handleChange(e)}
            />
            <div className="flex mb-8">
              <div className="mt-10">
                <select id="region" className="" value={countriesData.searchVal} onChange={(e) => handleDropDown(e)}>
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

        {/* List of countries */}
        <div className="">
          <CountriesList {...countriesData} />
        </div>
      </div>
    </div>
  )
}

export default Home; 