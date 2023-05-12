import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import styles from '../css/styles.module.css'
import { SolitoImage } from 'solito/image'

type country = {
  population: number
  region: string
  capital: Array<string>
  common: string
  flags: string
}

const Card = ({ population, region, capital, common, flags }: country) => {
  return (
    <div className={`mb-8 bg-white ${styles.card}`}>
      <div className={`${styles.relativeP}`}>
        <SolitoImage
          src={flags}
          alt={`Flag of ${common}`}
          fill={true}
          resizeMode="cover"
        />
      </div>
      {/* country name and info */}
      <div className={`${styles.info} pt-2`}>
        <div className="pt-4">
          <p className="text-xl font-bold">{common}</p>
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
    </div>
  )
}

export default Card
