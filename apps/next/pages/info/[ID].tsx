import React, { FC, useState, useEffect } from 'react'
import styles from '../../css/styles.module.css'
import { SolitoImage } from 'solito/image'

//COUNTRY PROFILE PAGE
const ID: FC = () => {
  const [countryData, setCountryData] = useState({}); 
  const [darkMode, setDarkMode] = useState<boolean>(false); 

  return (
    <div className={`bg-gray-100 ${styles.nation}`}>
      <header className="mb-6 bg-white pb-4 pt-4 md:mb-2">
        <div className="mx-auto flex w-11/12 items-center justify-between">
          <h1 className={`font-medium`}>Where in the world?</h1>
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
                  <SolitoImage
                    src={'https://flagcdn.com/es.svg'}
                    alt={`Flag`}
                    fill={true}
                    resizeMode="cover"
                  />
                </div>
                {/* country name and info */}
                <div className={`${styles.info} pt-2`}>
                  <div className="pt-2">
                  <p className="text-base">
                      <span className="font-bold">
                        Native Name: </span>
                      name
                    </p>
                    <p className="text-base">
                      <span className="font-bold">
                        Population: </span>
                      population
                    </p>
                    <p className="text-base">
                      <span className="font-bold">
                        Sub Region: </span>
                      sub region
                    </p>
                    <p className="text-base">
                      <span className="font-bold">
                        Capital: </span>
                      capital
                    </p>
                  </div>
                </div>
                <div className={`${styles.info}`}>
                  <div className="pt-4">
                    <p className="text-base">
                      <span className="font-bold">
                        Top Level Domain: </span>
                      domain
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Currencies: </span>
                      currencies
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Languages: </span>
                      language
                    </p>
                  </div>
                  <div className={`pt-4`}>
                    <div className="pt-4">
                      <p className="text-xl font-medium">Border Countries: </p>
                    </div>
                    <div className={`${styles.box}`}>
                      <button className="rounded bg-white px-2 ">
                        country
                      </button>
                      <button className="rounded bg-white px-2 ">
                        country
                      </button>
                      <button className="rounded bg-white px-2 ">
                        country
                      </button>
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
  ); 
}

export default ID; 