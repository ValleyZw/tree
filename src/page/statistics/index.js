import React, { lazy, Suspense } from 'react'
import { Grid, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import favourite from 'data/favourite'
import { Loading } from 'components'
const Components = [lazy(() => import('./components/Bar')), lazy(() => import('./components/Map'))]

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    height: 512,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: (theme.palette.type === 'dark') ? '#333' : '#fff',
  },
}))

const moduleLayout = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6
}

function Statistics () {
  const classes = useStyles()

  return (
    <Grid container spacing={32}>
      {Components.map((Component, index) =>
        <Grid key={index} item {...moduleLayout}>
          <Card className={classes.card}>
            <Suspense fallback={<Loading/>}>
              <Component favourite={favourite}/>
            </Suspense>
          </Card>
        </Grid>)
      }
    </Grid>
  )
}

export default Statistics