import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

import { Card, CardContent, Typography } from '@material-ui/core'
import { Link } from '@material-ui/icons'
import LazyLoad from 'react-lazyload'
import ImageZoom from 'react-medium-image-zoom'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    position: 'relative',
    transition: `all 0.2s ease-in-out`,
    height: '100%',
    backgroundColor: (theme.palette.type === 'dark') ? '#333' : '#fff',
  },
  cardMedia: {
    flexShrink: 0,
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: 256
    },
    height: 350,
    transition: `all 0.5s ease-in-out`,
    '&:hover': {
      transform: `scale(1.1)`,
    },
    cursor: 'pointer'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  summary: {
    maxHeight: 190,
    margin: 0,
    overflowY: 'auto',
    textAlign: 'justify'
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  cardLink: {
    textDecoration: 'none',
    color: fade(theme.palette.common.white, 0.55),
    transition: `all 0.3s ease-in`,
    '&:hover': {
      color: fade(theme.palette.common.white, 0.75),
    }
  },
}))

/**
 *
 * @type {{docResource: String, docTitle: String, imgTitle: String, ratingCount: String, ratingValue: String, summaryText: String}}
 */
List.propTypes = {
  docResource: PropTypes.string.isRequired,
  docTitle: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired,
  ratingCount: PropTypes.string.isRequired,
  ratingValue: PropTypes.string.isRequired,
  summaryText: PropTypes.string.isRequired
}

function List ({ratingValue, ratingCount, docTitle, docResource, imgTitle, summaryText}) {
  const theme = useTheme()
  const classes = useStyles()
  const imgLink = `./cover/${imgTitle}`

  return (
    <Card className={classes.card}>
      <LazyLoad once={true} height={200} offset={[100, 0]} overflow={true}>
        <ImageZoom
          defaultStyles={{overlay: {backgroundColor: (theme.palette.type === 'dark') ? '#212121' : '#fff'}}}
          image={{
            src: imgLink,
            alt: imgTitle,
            className: classes.cardMedia,
          }}
        />
      </LazyLoad>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {docTitle}
          </Typography>

          <Typography component="h6" variant="h6">
            {ratingValue} / 10
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            {ratingCount}
          </Typography>

          <section className={classes.summary}>
            <Typography variant="subtitle1" color="textSecondary">
              {summaryText}
            </Typography>
          </section>

        </CardContent>
        <div className={classes.controls}>
          <a target="_blank" rel="noopener noreferrer" href={docResource} className={classes.cardLink}>
            <Link/>
          </a>
        </div>
      </div>
    </Card>
  )
}

export default List