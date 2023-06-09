import React from 'react'
import styles from '../css/styles.module.css'
import { SolitoImage } from 'solito/image'
import Link from 'next/link'

type country = {
  population: number
  region: string
  subregion: string
  capital: Array<string>
  name: string
  flags: string
  currencies: string
  languages: unknown
  borders: string
  tld: string
  altSpellings: Array<string>
  list: any
  darkMode: boolean
}

const Card = ({ population, region, capital, name,  flags, subregion, languages, currencies, borders, tld, altSpellings, list, darkMode} : country) => {

  //Stores country info in local storage to display country stats
  const sessionInfo = () => {
    //Array of nearby countries
    const neighbors = []; 
    for(let i = 0; i < borders.length; i++){
      for(let j = 0; j < list.length; j++){
        if(borders[i] === list[j].cioc){
          neighbors.push(list[j].name.common);
        }
      }
    }

    const profile = {
      name,
      nativeName: altSpellings[altSpellings.length - 1],
      flags,
      population,
      capital,
      region,
      subregion,
      currencies,
      languages,
      borders: neighbors,
      tld: tld[0]
    };

    sessionStorage.setItem('country', JSON.stringify(profile)); 
  }

  return (
    <Link
      href={`/info/${name}`}
      className={`${styles.link} ${styles.card} mb-2 bg-white`}
      onClick={sessionInfo}
    >
      <div className={`${styles.relativeP}`}>
        <SolitoImage
          src={flags}
          alt={`Flag of ${name}`}
          fill={true}
          resizeMode="cover"
        />
      </div>
      {/* country name and info */}
      <div style={{ backgroundColor: darkMode ? "#202d36" : "#fff" }} className={`${styles.info} pt-2`}>
        <div style={{ backgroundColor: darkMode ? "#202d36" : "#fff" , color: darkMode ? "#fff" : "#000000" }} className="pt-4">
            <p className="text-xl font-bold">{name}</p>          
          <p className="text-base">
            <span className="font-bold">Population: </span>
            {population}
          </p>
          <p className="text-base">
            <span className="font-bold">Region: </span>
            {region}
          </p>
          <p className="text-base">
            <span className="font-bold">Capital: </span>
            {capital[0]}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card; 