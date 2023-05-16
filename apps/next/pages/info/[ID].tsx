import React, { FC, useState, useEffect } from 'react'
import styles from '../../css/styles.module.css'
import Link from 'next/link'

//COUNTRY PROFILE PAGE
const ID: FC = () => {
  const [countryData, setCountryData] = useState<any>({}); 
  const [darkMode, setDarkMode] = useState<boolean>(false); 
  const [load, setLoad] = useState(false); 

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
    <div style={{backgroundColor: darkMode ? "#202d36" : "#fff"}} className={` ${styles.nation}`}>
      <header className="mb-6  pb-4 pt-4 md:mb-2">
        <div className="mx-auto flex w-11/12 items-center justify-between">
          <h2 style={{ backgroundColor: darkMode ? "#202d36" : "#fff" , color: darkMode ? "#fff" : "#000000" }} className={`font-medium`}>Where in the world?</h2>
          <button style={{color: darkMode ? "#fff" : "#1f2d38"}} onClick={() => setDarkMode(!darkMode)} className="rounded px-4 py-2 font-bold text-black flex">
          <svg style={{marginRight: '0.5rem'}} className="" fill={darkMode ? "#fff" : "#1f2d38"} height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/></svg>  
            Dark Mode
          </button>
        </div>
      </header>
      <div  className={`mx-auto mb-12 w-11/12 md:mb-6 md:mt-4`}>
        <div className={`mx-auto w-11/12 md:ml-0 `}>
          <Link
            href="/"
            className={`font-sm rounded px-4 py-1 ${styles.backBtn} ${darkMode ? styles.darkMode : styles.lightMode}`}
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
                    <h2 style={{ color: darkMode ? "#fff" : "#000000" }} className="mb-4 mt-4 text-xl font-bold">
                      {countryData.name}
                    </h2>
                    <div className={`${styles.details}`}>
                      <p style={{ color: darkMode ? "#fff" : "#000000" }}>
                        <span className="font-medium">Native Name: </span>
                        <span className="font-light">
                          {countryData?.nativeName}
                        </span>
                      </p>
                      <p style={{ color: darkMode ? "#fff" : "#000000" }}>
                        <span className="font-medium">Population: </span>
                        <span className="font-light">
                          {countryData?.population}
                        </span>
                      </p>
                      <p style={{ color: darkMode ? "#fff" : "#000000" }}>
                        <span className="font-medium">Sub Region: </span>
                        <span className="font-light">
                          {countryData?.subregion}
                        </span>
                      </p>
                      <p  style={{ color: darkMode ? "#fff" : "#000000" }}>
                        <span className="font-medium">Capital: </span>
                        <span className="font-light">
                          {countryData?.capital}
                        </span>
                      </p>
                      <p style={{ color: darkMode ? "#fff" : "#000000" }} className="mt-8 md:mt-0">
                        <span className="font-medium">Top Level Domain: </span>
                        <span className="font-light">{countryData?.tld}</span>
                      </p>
                      <p  style={{ color: darkMode ? "#fff" : "#000000" }}>
                        <span className="font-medium">Currencies: </span>
                        <span className="font-light">
                          {countryData?.currencies}
                        </span>
                      </p>
                      <p style={{ color: darkMode ? "#fff" : "#000000" }}>
                        <span className="font-medium">Langauges: </span>
                        <span className="font-light">
                          {countryData?.languages}
                        </span>
                      </p>
                    </div>
                    <div className={`${styles.box} mt-4 flex`}>
                      <p style={{ color: darkMode ? "#fff" : "#000000" }} className="mb-4 text-base md:mr-2">
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
