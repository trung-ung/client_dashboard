import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Hidden, IconButton } from '@material-ui/core'

import { Person } from '@material-ui/icons/'

import React, { useState } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    typography: {
      //   color: '#FFFFFF'
      color: theme.palette.primary.contrastText
    }
  })
)

const SomeMenu = props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState()
  const classes = useStyles()

  const recordButtonPosition = event => {
    setAnchorEl(event.currentTarget)
    setMenuOpen(true)
  }

  let closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <Person></Person>
      <Button onClick={recordButtonPosition}>
        <Hidden xsDown>
          <Typography variant="h4" className={classes.typography}>
            Trung Ung
          </Typography>
        </Hidden>

        <Hidden smUp>
          <Typography variant="h5" className={classes.typography}>
            Trung Ung
          </Typography>
        </Hidden>
      </Button>
      <Menu anchorEl={anchorEl} open={menuOpen} onClose={closeMenu}>
        <MenuItem onClick={closeMenu}> LOGOUT </MenuItem>
      </Menu>
    </>
  )
}

export default SomeMenu
