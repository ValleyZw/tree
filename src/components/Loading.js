import React from 'react'
import { CircularProgress, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 100,
    textAlign: 'center'
  },
  progress: {
    margin: theme.spacing(2),
    color: (theme.palette.type === 'dark') ? '#fbfbfb' : '#333333',
  },
}))

const Loading = ({error}) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {error ? <Typography component="h6" variant="h6">Opps!</Typography> :
        <CircularProgress className={classes.progress} size={100}/>}
    </div>
  )
}

export default Loading