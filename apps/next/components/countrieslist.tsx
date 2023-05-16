import React from 'react'; 
import styles from '../css/styles.module.css'; 
import Card from './card'; 

type countriesData = {
  list: any
  searchVal: string
  filtered: Array<unknown>
  darkMode: boolean
}

const CountriesList = ({ list, searchVal, filtered, darkMode }: countriesData) => {
  // shows filtered list if using select
  if (filtered.length > 0) {
    return (
      <div className={`pb-2 ${styles.wrapper}`}>
        {filtered?.map((country: any, index: number) => {
          return (
            <Card 
            key={`react-key${country.name.common + index}`}
            flags={country.flags.svg}
            name={country.name.common}            
            population={country.population}
            region={country.region}
            capital={country.capital}
            subregion={country.subregion} 
            currencies={country.currencies}
            languages={country.languages}
            borders={country.borders}
            tld={country.tld}
            list={list}
            altSpellings={country.altSpellings}
            darkMode={darkMode}
            />
          )
        })}
      </div>
    )
  }

  //Display message if there are no search results that matches
  if (searchVal.length > 0 && filtered.length < 1) {
    return (
      <>
        <h2 style={{ color: darkMode ? "#fff" : "#000000" }}>No results</h2>
      </>
    )
  }

  return (
    <div className={`pb-2 ${styles.wrapper}`}>
      {list?.map((country: any, index: number) => {
        return (
          <Card 
          key={`react-key${country.name.common + index}`}
          flags={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          subregion={country.subregion} 
          currencies={country.currencies}
          languages={country.languages}
          borders={country.borders}
          tld={country.tld}
          altSpellings={country.altSpellings}
          list={list}
          darkMode={darkMode}
          />
        )
      })}
    </div>
  )
}

export default CountriesList; 