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
  nativeName: string
  borders: string
  tld: Array<string>
  list: any
}

const Card = ({ population, region, capital, name, nativeName, flags, subregion, languages, currencies, borders, tld, list} : country) => {

  //Stores country info in local storage to display country stats
  const sessionInfo = () => {
    //Array of nearby countries
    const nearbyNations = []; 
    for(let i = 0; i < borders.length; i++){
      for(let j = 0; j < list.length; j++){
        if(borders[i] === list[i].name.nativeName){
          nearbyNations.push(list[i]);
        }
      }
    }

    const profile = {
      name,
      nativeName,
      flags,
      population,
      capital,
      region,
      subregion,
      currencies,
      languages,
      borders: nearbyNations,
      tld
    };

    sessionStorage.setItem('country', JSON.stringify(profile)); 
  }

  return (
    <Link
      href={`/info/${name}`}
      className={`${styles.link} ${styles.card} mb-8 bg-white`}
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
      <div className={`${styles.info} pt-2`}>
        <div className="pt-4">
            <p className="text-xl font-bold">{name}</p>          
          <p className="text-base text-gray-700">
            <span className="font-bold">Population: </span>
            {population}
          </p>
          <p className="text-base text-gray-700">
            <span className="font-bold">Region: </span>
            {region}
          </p>
          <p className="text-base text-gray-700">
            <span className="font-bold">Capital: </span>
            {capital[0]}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card; 