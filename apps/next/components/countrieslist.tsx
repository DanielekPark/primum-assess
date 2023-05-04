import React, {FC, useState, useEffect, Fragment } from 'react'
import { HomeScreen } from 'app/features/home/screen'

type countriesData = {
  list: Array<unknown>
  filtered: Array<unknown>
}

const CountriesList= ({list, filtered}: countriesData) => {

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
              <img className="w-full" src={country.coatOfArms.png} alt="Flag" />
              <div className="px-8 py-4">
                <p className="mb-2 text-xl font-bold">{country.name.common}</p>
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
                <p className="mb-2 text-xl font-bold">{country.name.common}</p>
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

export default CountriesList; 
