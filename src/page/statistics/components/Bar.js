import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts'

import { countBy, useIndex } from 'utils'

const tooltip = {
  backgroundColor: 'rgba(128,128,128,0.75)',
  border: 'none'
}

/**
 * BarChild
 * @type {{favourite: Array}}
 */
BarChild.propTypes = {
  favourite: PropTypes.array.isRequired
}

function BarChild ({favourite}) {
  const [activeIndex, setActiveIndex] = useIndex()

  const data = []
  const yearData = countBy(favourite, item => item.docYear)
  const keys = Object.keys(yearData)
  for (let i = Number(keys[0]); i <= Number(keys.slice(-1)[0]); i++) {
    const documentaries = yearData.hasOwnProperty(i) ? yearData[i] : 0
    data.push({name: i, documentaries})
  }

  return (
    <ResponsiveContainer>
      <BarChart data={data} style={{margin: '10px 30px 5px -30px'}}>
        <CartesianGrid strokeDasharray="5 5" stroke="rgba(105,105,105, 0.5)"/>
        <XAxis dataKey="name" stroke="rgba(105,105,105, 0.8)"/>
        <YAxis stroke="rgba(105,105,105, 0.8)"/>
        <Bar dataKey="documentaries" {...setActiveIndex}>
          {data.map((entry, index) => <Cell cursor="pointer"
                                            fill={index === activeIndex ? 'rgba(200,200,200,0.75)' : 'rgba(128,128,128, 0.85)'}
                                            key={`cell-${index}`}/>)}
        </Bar>
        <Tooltip cursor={false} contentStyle={tooltip}/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChild