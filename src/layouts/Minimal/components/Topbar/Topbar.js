import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar } from '@material-ui/core'
import { ReactComponent as LogoComponent } from '../../../../images/logos/logo-mp.svg'

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    backgroundColor: 'white'
  }
}))

const Topbar = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed">
      <Toolbar>
        <RouterLink to="/">
          <LogoComponent></LogoComponent>
        </RouterLink>
      </Toolbar>
    </AppBar>
  )
}

Topbar.propTypes = {
  className: PropTypes.string
}

export default Topbar
