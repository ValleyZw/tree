import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { ExpandMore, Search, ViewList, ViewModule, Sort } from '@material-ui/icons'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  InputBase,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core'

import { useTarget } from 'utils'

const sorts = {Title: 'docTitle', Rate: 'ratingValue', Year: 'docYear'}

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginTop: theme.spacing(-3),
  },
  summary: {
    marginTop: theme.spacing(-3),
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    height: '90%',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.2),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(8),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    height: '100%',
    width: '100%',
  },
  inputInput: {
    paddingLeft: theme.spacing(8),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}))

/**
 * Setting
 * @type {{searchValue: String, setLSortValue: Function, setSearchValue: Function, setToggle: Function, toggle: Boolean}}
 */
Setting.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setLSortValue: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
}

function Setting ({toggle, setToggle, searchValue, setSearchValue, setLSortValue}) {
  const classes = useStyles()
  const [target, {setTarget, freeTarget}] = useTarget()

  function handleItemClick (event) {
    setLSortValue(sorts[event.currentTarget.textContent])
    freeTarget()
  }

  return (
    <ExpansionPanel className={classes.content}>
      <ExpansionPanelSummary aria-label="Toggle setting" expandIcon={<ExpandMore/>} className={classes.summary}>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>

        <IconButton aria-label="Toggle layout" onClick={setToggle}>
          {toggle ? <ViewList fontSize="small"/> : <ViewModule fontSize="small"/>}
        </IconButton>
        <IconButton aria-label="Toggle sorted" onClick={setTarget}>
          <Sort fontSize="small"/>
        </IconButton>

        <Menu id="simple-menu" anchorEl={target} open={Boolean(target)} onClose={freeTarget}>
          {Object.keys(sorts).map((key, index) =>
            <MenuItem key={index} onClick={handleItemClick}>{key}</MenuItem>
          )}
        </Menu>

        <div className={classes.grow}/>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search/>
          </div>
          <InputBase
            placeholder="Search…"
            value={searchValue}
            onChange={setSearchValue}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default Setting