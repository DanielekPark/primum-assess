import React, { FC, useState, useEffect } from 'react'
import styles from '../../css/styles.module.css'
import Link from 'next/link'

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
      <div className={`mx-auto mb-12 w-11/12 md:mb-6 md:mt-4`}>
        <div className={`mx-auto w-11/12 md:ml-0 `}>
          <Link
            href="/"
            className={`font-sm rounded px-4 py-1 ${styles.backBtn}`}
          >
            &#8592; Back
          </Link>
        </div>
      </div>
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
                <div className={`${styles.info} md:self-center `}>
                  <div className="md pt-4 md:pt-0">
                    <h2 className="mb-4 mt-4 text-xl font-bold">
                      {countryData.name}
                    </h2>
                    <div className={`${styles.details}`}>
                      <p>
                        <span className="font-medium">Native Name: </span>
                        <span className="font-light">
                          {countryData?.nativeName}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium">Population: </span>
                        <span className="font-light">
                          {countryData?.population}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium">Sub Region: </span>
                        <span className="font-light">
                          {countryData?.subregion}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium">Capital: </span>
                        <span className="font-light">
                          {countryData?.capital}
                        </span>
                      </p>
                      <p className="mt-8 md:mt-0">
                        <span className="font-medium">Top Level Domain: </span>
                        <span className="font-light">{countryData?.tld}</span>
                      </p>
                      <p>
                        <span className="font-medium">Currencies: </span>
                        <span className="font-light">
                          {countryData?.currencies}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium">Langauges: </span>
                        <span className="font-light">
                          {countryData?.languages}
                        </span>
                      </p>
                    </div>
                    <div className={`${styles.box} mt-4 flex`}>
                      <p className="mb-4 text-base md:mr-2">
                        <span className="font-bold">Border Countries: </span>
                      </p>
                      <div className="flex justify-between">
                        {countryData?.borders?.map(
                          (neighbor: string, idx: number) => {
                            return (
                              <p
                                key={`neighbor-key-${idx}`}
                                className="rounded bg-white px-2 text-center md:mr-4 md:py-2"
                              >
                                {neighbor}
                              </p>
                            )
                          }
                        )}
                      </div>
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
