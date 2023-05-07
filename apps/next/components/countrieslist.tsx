import React from 'react'
import { SolitoImage } from 'solito/image'
import styles from '../css/styles.module.css'

type countriesData = {
  list: Array<unknown>
  searchVal: string
  filtered: Array<unknown>
}

const CountriesList = ({ list, searchVal, filtered }: countriesData) => {
  // shows filtered list if using select
  if (filtered.length > 0) {
    return (
      <>
        {filtered?.map((country: any, index: number) => {
          return (
            <div
              className={`mx-auto mb-8 bg-white ${styles.card} rounded-lg`}
              key={`list-react-key${index}`}
            >
              <div className={`${styles.relativeP} py-16`}>
                <SolitoImage
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                  fill={true}
                />
              </div>
              {/* country name and info */}
              <div className={`${styles.info} pt-2`}>
                <div className="pt-4">
                  <p className="text-xl font-bold">{country.name.common}</p>
                  <p className="text-base text-gray-700">
                    <span className="font-bold">Population: </span>
                    {country.population}
                  </p>
                  <p className="text-base text-gray-700">
                    <span className="font-bold">Region: </span>
                    {country.region}
                  </p>
                  <p className="text-base text-gray-700">
                    <span className="font-bold">Capital: </span>
                    {country.capital[0]}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }

  //Display message if there are no search results that matches
  if (searchVal.length > 0 && filtered.length < 1) {
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
            className={`mb-8 bg-white ${styles.card} rounded-lg`}
            key={`react-key${index}`}
          >
            <div className={`${styles.relativeP} py-16`}>
              <SolitoImage
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                fill={true}
              />
            </div>
            {/* country name and info */}
            <div className={`${styles.info} pt-2`}>
              <div className="pt-4">
                <p className="text-xl font-bold">{country.name.common}</p>
                <p className="text-base text-gray-700">
                  <span className="font-bold">Population: </span>
                  {country.population}
                </p>
                <p className="text-base text-gray-700">
                  <span className="font-bold">Region: </span>
                  {country.region}
                </p>
                <p className="text-base text-gray-700">
                  <span className="font-bold">Capital: </span>
                  {country.capital[0]}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CountriesList
