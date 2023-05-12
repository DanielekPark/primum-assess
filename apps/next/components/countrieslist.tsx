import React from 'react'; 
import styles from '../css/styles.module.css'; 
import Card from './card'; 

type countriesData = {
  list: Array<unknown>
  searchVal: string
  filtered: Array<unknown>
}

const CountriesList = ({ list, searchVal, filtered }: countriesData) => {
  // shows filtered list if using select
  if (filtered.length > 0) {
    return (
      <div className={`pb-2 ${styles.card}`}>
        {filtered?.map((country: any, index: number) => {
          return (
            <Card 
            key={`filter-key${country.name.common + index}`}
            flags={country.flags.svg}
            common={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}/>
          )
        })}
      </div>
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
            <Card 
            key={`filter-key${country.name.common + index}`}
            flags={country.flags.svg}
            common={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}/>
        )
      })}
    </>
  )
}

export default CountriesList; 