import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { IconButton, Divider, List, Drawer, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
import {
  ChevronLeft,
  Movie,
  BarChart,
  Comment,
} from '@material-ui/icons'

const mainMenus = [
  {
    children: <Movie/>,
    label: 'Documentaries',
    route: '/'
  },
  {
    children: <BarChart/>,
    label: 'Statistics',
    route: '/statistics'
  },
]

const sideMenus = [
  {
    children: <Comment/>,
    label: 'Comment',
    route: '/comment'
  }
]

const Menus = ({menus}) => (
  <>
    {menus.map(menu => (
        <Link to={menu.route} key={menu.label} style={{textDecoration: 'none'}}>
          <ListItem button>
            <ListItemIcon>
              {menu.children}
            </ListItemIcon>
            <ListItemText primary={menu.label}/>
          </ListItem>
        </Link>
      )
    )}
  </>
)

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    whiteSpace: 'nowrap',
    backgroundColor: (theme.palette.type === 'dark') ? '#212121' : '#ffffff',
    opacity: 0.85,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 48,
  },
}))

/**
 * DrawerChild
 * @type {{toggle: Boolean, setToggle: Function}}
 */
DrawerChild.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired
}

function DrawerChild ({toggle, setToggle}) {
  const classes = useStyles()
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(classes.drawerPaper, toggle || classes.drawerPaperClose),
      }}
      open={toggle}
    >
      <div className={classes.toolbar}>
        {
          toggle && <IconButton onClick={setToggle}>
            <ChevronLeft/>
          </IconButton>
        }
      </div>
      <Divider/>
      <List><Menus menus={mainMenus}/></List>
      <Divider/>
      <List><Menus menus={sideMenus}/></List>
    </Drawer>
  )
}

export default DrawerChild