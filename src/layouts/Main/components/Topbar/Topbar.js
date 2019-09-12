import { AppBar, Badge, Hidden, IconButton, Toolbar } from '@material-ui/core'
import InputIcon from '@material-ui/icons/Input'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Logo from '../../../../images/logos/logo-mp.png'
import Menu from './components/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}))

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props

  const classes = useStyles()

  const [notifications] = useState([])

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <Hidden xsDown>
            <img alt="Logo" src={Logo} height="46" width="240.2" />
          </Hidden>
          <Hidden smUp>
            <img alt="Logo" src={Logo} height="30" width="156.65" />
          </Hidden>

          {/* <LogoComponent /> */}
        </RouterLink>

        <div className={classes.flexGrow} />
        <Menu />
        {/* <Hidden xsDown>
          <Typography variant="h4" color="inherit">
            Trung Ung
          </Typography>
        </Hidden>

        <Hidden smUp>
          <Typography variant="h5" color="inherit">
            Trung Ung
          </Typography>
        </Hidden> */}

        {/* <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden> */}
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
}

export default Topbar
