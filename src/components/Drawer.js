import React, { Fragment } from 'react'
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

/**
 * menus
 * @type {Array}
 * @value [0: mainMenu, 1: sideMenu]
 */
const menus = [
  [
    {
      children: <Movie/>,
      label: 'Documentaries',
      route: '/'
    },
    {
      children: <BarChart/>,
      label: 'Statistics',
      route: '/statistics'
    }
  ],
  [
    {
      children: <Comment/>,
      label: 'Comment',
      route: '/comment'
    }
  ]
]

const Menus = ({menus, toggle}) => (
  <>
    {menus.map(menu => (
        <Link to={menu.route} key={menu.label} style={{textDecoration: 'none', color: '#fafafa'}}>
          <ListItem button onClick={toggle}>
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
          toggle && <IconButton aria-label="Close drawer" onClick={setToggle}>
            <ChevronLeft/>
          </IconButton>
        }
      </div>
      {menus.map((value, key) => (
        <Fragment key={key}>
          <Divider/>
          <List component="nav"><Menus menus={value} toggle={setToggle}/></List>
        </Fragment>
      ))}
    </Drawer>
  )
}

export default DrawerChild