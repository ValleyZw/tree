import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import { Module, List, Setting } from './components'
import favourite from 'data/favourite'
import { sortBy, useToggle, useInput, useTitle } from 'utils'

const moduleLayout = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 3
}

const listLayout = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 6,
  xl: 6
}

function Home () {
  const [sortValue, setLSortValue] = useState('')
  const {toggle, setToggle} = useToggle()
  const [searchValue, setSearchValue] = useInput()
  useTitle('Documentaries | Valley');

  const props = {
    toggle,
    setToggle,
    searchValue,
    setSearchValue,
    setLSortValue
  }

  const layout = toggle ? listLayout : moduleLayout
  const documentaries = sortBy(favourite.filter(({docTitle}) => docTitle.toLowerCase().includes(searchValue.toLowerCase())), (a, b) => b[sortValue] - a[sortValue])

  return (
    <>
      <Setting {...props}/>
      <Grid container spacing={4}>
        {documentaries.map((documentary, key) => (
          <Grid item key={key} {...layout}>
            {toggle ? <List {...documentary}/> : <Module {...documentary}/>}
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Home