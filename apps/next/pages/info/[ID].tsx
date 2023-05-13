import React, { FC, useState, useEffect } from 'react'
import styles from '../../css/styles.module.css'
import { SolitoImage } from 'solito/image'
import { count } from 'console'

//COUNTRY PROFILE PAGE
const ID: FC = () => {
  const [countryData, setCountryData] = useState<any>({})
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(sessionStorage.getItem('country') || '')
      setCountryData(data)
    }
  }, [])

  return (
    <div className={`bg-gray-100 ${styles.nation}`}>
      <header className="mb-6 bg-white pb-4 pt-4 md:mb-2">
        <div className="mx-auto flex w-11/12 items-center justify-between">
          <h2 className={`font-medium`}>Where in the world?</h2>
          <button className="rounded px-4 py-2 font-bold text-black">
            dark mode
          </button>
        </div>
      </header>

      {typeof window !== 'undefined' ? (
        <div className="mx-auto w-11/12">
          <div
            className={`md:items-between pb-2 md:flex md:flex-wrap md:items-start md:justify-between ${styles.container} mx-auto w-11/12`}
          >
            <div className={`pb-2 ${styles.wrapper}`}>
              <div className={`${styles.card} mb-8`}>
                <div className={`${styles.relativeP}`}>
                {/* <SolitoImage
                 src={`${countryData.flags}`}
                 alt={`Flag`}
                 fill={true}
                 resizeMode="cover"
               />  */}
                </div>

                {/* country name and info */}
                <div className={`${styles.info} pt-2`}>
                  <div className="pt-2">
                    <p className="text-base">
                      <span className="font-bold">Native Name: </span>
                      {countryData?.nativeName}
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Population: </span>
                      {countryData?.population}
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Sub Region: </span>
                      {countryData.subregion}
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Capital: </span>
                      {countryData.capital}
                    </p>
                  </div>
                </div>

                <div className={`${styles.info} pt-2`}>
                  <div className="pt-2">
                    <p className="text-base">
                      <span className="font-bold">Top Level Domain: </span>
                      domain
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Currencies: </span>
                      currencies
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Languages: </span>
                      languages
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Border Countries: </span>
                      {countryData.capital}
                    </p>
                    <div className={`${styles.box}`}>
                      <div className="rounded bg-white px-2">country</div>
                      <div className="rounded bg-white px-2">country</div>
                      <div className="rounded bg-white px-2">country</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default ID
