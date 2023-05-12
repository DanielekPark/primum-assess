import React, { FC, useState, useEffect, ChangeEvent } from 'react'

type props = {
  setCountriesData: Function
  countriesData: any
}

const Form = ({ setCountriesData, countriesData }: props) => {
  //filter countries using drop down
  const handleDropDown = (e: ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value
    setCountriesData({ ...countriesData, searchVal: region });
    const filterSearch = countriesData?.list?.filter(
      (country: any) => region === country.region
    );
    setCountriesData({ ...countriesData, filtered: filterSearch });
  }

  //filters countries by typing
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountriesData({ ...countriesData, searchVal: e.target.value });

    const results = countriesData?.list?.filter((country: any) => {
      if (
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return country;
      }
    })
    setCountriesData({ ...countriesData, filtered: results });
  }

  return (
    <form className="md:flex md:items-center md:justify-between">
      <div className="md:w-1/3">
        <input
          type="text"
          className="block w-full rounded-lg bg-white pb-2 pt-2 text-sm font-medium md:mt-2"
          placeholder="Search for a country..."
          onChange={handleChange}
        />
      </div>
      <div className="mb-8 flex">
        <div className="mt-10">
          {/* Filter using drop down, select element */}
          {/**/}{' '}
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
  )
}

export default Form
