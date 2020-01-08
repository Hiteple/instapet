import React from 'react'
import ContentLoader from 'react-content-loader'

export const CategoryLoader = () => (
  <ContentLoader
    height={100}
    width={100}
    speed={2}
    primaryColor='#f3f3f3'
    secondaryColor='#ecebeb'
  >
    <circle cx='635' cy='-48' r='45' />
    <rect x='563' y='-156' rx='0' ry='0' width='443' height='193' />
    <rect x='64' y='37' rx='0' ry='0' width='0' height='0' />
    <circle cx='632' cy='-37' r='9' />
    <circle cx='30' cy='152' r='0' />
    <circle cx='649' cy='92' r='131' />
    <rect x='612' y='-46' rx='0' ry='0' width='92' height='13' />
    <rect x='581' y='-127' rx='0' ry='0' width='454' height='243' />
    <circle cx='53' cy='53' r='39' />
  </ContentLoader>
)
