import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps'
import { scaleLinear } from 'd3-scale'

import { countBy, renameKeys } from 'utils'

const popScale = scaleLinear()
  .domain([0, 10, 100])
  .range(['#CFD8DC', '#607D8B', '#37474F'])

const useStyles = makeStyles(theme => ({
  map: {
    height: 'auto',
    width: '100%',
    transition: `all 0.5s ease-in`,
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%',
    },
  }
}))

/**
 * MapChild
 * @type {{favourite: Array}}
 */
MapChild.propTypes = {
  favourite: PropTypes.array.isRequired
}

function MapChild ({favourite}) {
  const classes = useStyles()
  const countries = []

  favourite.forEach(ele => countries.push(...ele.country))
  const countryDetail = renameKeys({'UK': 'United Kingdom', 'USA': 'United States'}, countBy(countries))

  return (
    <ComposableMap
      projectionConfig={{
        scale: 205,
        rotation: [-11, 0, 0],
      }}
      className={classes.map}
    >
      <ZoomableGroup center={[0, 20]} disablePanning>
        <Geographies geography="world-50m.json">
          {(geographies, projection) => geographies.map((geography, i) => geography.id !== 'ATA' && (
            <Geography
              key={i}
              geography={geography}
              projection={projection}
              style={{
                default: {
                  fill: countryDetail.hasOwnProperty(geography.properties.name) ? popScale(countryDetail[geography.properties.name]) : '#ECEFF1',
                  stroke: '#607D8B',
                  strokeWidth: 0.75,
                  outline: 'none',
                },
                hover: {
                  fill: '#ECEFF1',
                  stroke: '#607D8B',
                  strokeWidth: 0.75,
                  outline: 'none',
                },
                pressed: {
                  fill: '#ECEFF1',
                  stroke: '#607D8B',
                  strokeWidth: 0.75,
                  outline: 'none',
                },
              }}
            />
          ))}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  )
}

export default MapChild