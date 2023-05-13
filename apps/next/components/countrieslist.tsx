import React from 'react'; 
import styles from '../css/styles.module.css'; 
import Card from './card'; 

type countriesData = {
  list: any
  searchVal: string
  filtered: Array<unknown>
}
//STYLE NEXT LINK https://www.slingacademy.com/article/how-to-style-link-component-in-next-js/
const CountriesList = ({ list, searchVal, filtered }: countriesData) => {
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
            nativeName={country.name.common.nativeName}
            population={country.population}
            region={country.region}
            capital={country.capital}
            subregion={country.subregion} 
            currencies={country.currencies}
            languages={country.languages}
            borders={country.borders}
            tld={country.tld}
            list={list}
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
        <h2>No results</h2>
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
          nativeName={country.name.common.nativeName}
          population={country.population}
          region={country.region}
          capital={country.capital}
          subregion={country.subregion} 
          currencies={country.currencies}
          languages={country.languages}
          borders={country.borders}
          tld={country.tld}
          list={list}
          />
        )
      })}
    </div>
  )
}

export default CountriesList; 