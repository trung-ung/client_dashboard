import { Divider, Drawer } from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingsIcon from '@material-ui/icons/Settings'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'
import { Profile, SidebarNav } from './components'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}))

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props
  const languageFilter = useSelector(state => state.filter.language)
  const classes = useStyles()

  const pages = [
    {
      title: 'Dashboard',
      href: `/${languageFilter}/dashboard`,
      icon: <DashboardIcon />
    },
    // {
    //   title: 'Users',
    //   href: '/users',
    //   icon: <PeopleIcon />
    // },
    {
      title: 'Products',
      href: `/${languageFilter}/products`,
      icon: <ShoppingBasketIcon />
    },
    // {
    //   title: 'Authentication',
    //   href: '/sign-in',
    //   icon: <LockOpenIcon />
    // },
    // {
    //   title: 'Typography',
    //   href: '/typography',
    //   icon: <TextFieldsIcon />
    // },
    // {
    //   title: 'Icons',
    //   href: '/icons',
    //   icon: <ImageIcon />
    // },
    {
      title: 'Account',
      href: `/${languageFilter}/account`,
      icon: <AccountBoxIcon />
    },
    {
      title: 'Settings',
      href: `/${languageFilter}/settings`,
      icon: <SettingsIcon />
    }
  ]

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}>
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
}

export default Sidebar
