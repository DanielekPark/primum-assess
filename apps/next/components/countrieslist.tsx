import React, { FC, useState, useEffect, Fragment } from 'react'

type countriesData = {
  list: Array<unknown>
  searchVal: string
  filtered: Array<unknown>
}

const CountriesList = ({ list, searchVal ,filtered }: countriesData) => {
  // shows filtered list if using select
  if (filtered.length > 0) {
    return (
      <>
        {filtered?.map((country: any, index: number) => {
          return (
            <div
              className="mx-auto mb-8 max-w-sm rounded "
              key={`react-key${index}-filtered`}
            >
              {/* Need padding and size */}
              <div className="">
                {/* replace img with Next-image */}
                <img
                  className="w-full"
                  src={country.coatOfArms.png}
                  alt="Flag"
                />
              </div>

              <div className="px-8 py-4">
                <p className="mb-2 text-xl font-bold">
                  {country.name.common}
                </p>
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
      </>
    )
  }

  //Display message if there are no search results that matches
  if(searchVal.length > 0 && filtered.length < 1) {
    return (
      <>
        <h2>No results</h2>
      </>
    )
  }

    return (
      <>
        {list?.map((country: any, index: number) => {
          return (
            <div
              className="mx-auto mb-8 max-w-sm rounded "
              key={`react-key${index}`}
            >
              <img className="w-full" src={country.coatOfArms.png} alt="Flag" />
              <div className="px-8 py-4">
                <p className="mb-2 text-xl font-bold">
                  {country.name.common}</p>
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
      </>
    )
}

export default CountriesList
