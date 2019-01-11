import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { IconButton, Toolbar, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Menu } from '@material-ui/icons'
import { InsertLink } from '@material-ui/icons'
import { SvgIcon } from '@material-ui/core'

const Github = () => (
  <SvgIcon fontSize="small">
    <path
      d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"/>
  </SvgIcon>
)

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: (theme.palette.type === 'dark') ? "#1e1e1e": "#ffffff",
    opacity: 0.85,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  cardLink: {
    textDecoration: 'none',
    color: (theme.palette.type === 'dark') ? "#fbfbfb": "#1e1e1e",
  },
}));

/**
 * AppBarChild
 * @type {{toggle: Boolean, setToggle: Function}}
 */
AppBarChild.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired
}

function AppBarChild ({ toggle, setToggle}) {
  const classes = useStyles();
  return (
    <AppBar
      position="absolute"
      className={classNames(classes.appBar, toggle && classes.appBarShift)}
    >
      <Toolbar disableGutters={!toggle} variant="dense">
        <IconButton
          aria-label="Open drawer"
          onClick={setToggle}
          className={classNames(classes.menuButton, toggle && classes.hide)}
        >
          <Menu/>
        </IconButton>

        <div className={classes.grow}/>
        <IconButton aria-label="Blog">
          <a target="_blank" aria-label="Blog" rel="noopener noreferrer" href={'https://valleyease.me'} className={classes.cardLink}>
            <InsertLink fontSize="small"/>
          </a>
        </IconButton>
        <IconButton aria-label="Github">
          <a target="_blank" aria-label="Github" rel="noopener noreferrer" href={'https://github.com/ValleyZw'} className={classes.cardLink}>
            <Github fontSize="small"/>
          </a>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarChild