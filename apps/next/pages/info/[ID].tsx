import React, { FC, useState, useEffect } from 'react'
import styles from '../../css/styles.module.css'
// import { SolitoImage } from 'solito/image'
import Image from 'next/image'

//COUNTRY PROFILE PAGE
const ID: FC = () => {
  const [countryData, setCountryData] = useState<any>({})
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(sessionStorage.getItem('country') || '')
      const currency = Object.keys(data.currencies)[0]
      const lang = Object.keys(data.languages)[0]
      data.currencies = currency
      data.languages = data.languages[lang]
      setLoad(!load)
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

      {typeof window !== 'undefined' && load ? (
        <div className="mx-auto w-11/12">
          <div
            className={`md:items-between pb-2 md:flex md:flex-wrap md:items-start md:justify-between ${styles.container} mx-auto w-11/12`}
          >
            <div className={`pb-2 ${styles.wrapper}`}>
              <div className={`${styles.card} lg:flex lg:justify-between`}>
                <div className={`${styles.relativeP} lg:ml-0 lg:mr-0`}>
                  <img
                    src={countryData.flags}
                    alt={`Flag of ${countryData.name}`}
                  />
                </div>

                {/* country name and info */}
                <div className={`${styles.info} pt-2 md:self-center `}>
                  <div className="pt-2 md:pt-0 md:my-auto md">
                    <h2 className="mb-4 mt-4 text-xl font-bold">
                      {countryData.name}
                    </h2>
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
                  <div className={`${styles.box} lg:flex`}>
                    <p className="text-base">
                      <span className="font-bold">Border Countries: </span>
                    </p>
                    <div className='flex flex-wrap'>
                    {countryData?.borders?.map(
                      (neighbor: string, idx: number) => {
                        return (
                          <div
                            key={`neighbor-key-${idx}`}
                            className="rounded bg-white px-2 md:mr-4"
                          >
                            {neighbor}
                          </div>
                        )
                      }
                    )}
                    </div>
                  </div>
                </div>
                <div className={`${styles.info} pt-2 md:self-center `}>
                  <div className="pt-2 md:pt-0 md:my-auto">
                    <h2 className="mb-4 mt-4 text-xl font-bold md:invisible">
                      {countryData.name}
                    </h2>
                    <p className="text-base">
                      <span className="font-bold">Top Level Domain: </span>
                      {countryData.tld}
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Currencies: </span>
                      {countryData.currencies}
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Languages: </span>
                      {countryData.languages}
                    </p>

                  </div>
                  <div className={`${styles.box} ${styles.hide} `}>
                    <p className="text-base">
                      <span className="font-bold">Border Countries: </span>
                    </p>
                    <div className='flex flex-wrap'></div>
                    {countryData?.borders?.map(
                      (neighbor: string, idx: number) => {
                        return (
                          <div
                            key={`neighbor-key-${idx}`}
                            className="rounded bg-white px-2"
                          >
                            {neighbor}
                          </div>
                        )
                      }
                    )}
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
