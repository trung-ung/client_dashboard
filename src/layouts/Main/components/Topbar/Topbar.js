import {
  AppBar,
  Badge,
  Hidden,
  IconButton,
  Toolbar,
  Divider
} from '@material-ui/core'
import InputIcon from '@material-ui/icons/Input'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Logo from '../../../../images/logos/logo-mp.png'
import { ReactComponent as LogoComponent } from '../../../../images/logos/logo-mp.svg'
import Menu from './components/Menu'
import * as LanguageActions from '../../../../actions/language'
import * as FilterActions from '../../../../actions/filter'
import { useActions } from '../../../../actions'

import ReactFlagsSelect from 'react-flags-select'
import formatCountryToLanguage from '../../../../helpers/formatCountryToLanguage'
import formatLanguageToCountry from '../../../../helpers/formatLanguageToCountry'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useSelector } from 'react-redux'
import { browserHistory } from '../../../../App'
import formatLangUrl from '../../../../helpers/formatLangUrl'
import getLangcodeFromUrl from '../../../../helpers/getLangcodeFromUrl'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor: 'white'
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

  const languageActions = useActions(LanguageActions)
  const filterActions = useActions(FilterActions)

  const isLoading = useSelector(state => state.language.isLoading)

  // const [notifications] = useState([])

  const languageFilter = useSelector(state => state.filter.language)

  return (
    <>
      <AppBar {...rest} className={clsx(classes.root, className)}>
        <Toolbar>
          <RouterLink to="/">
            {/* <Hidden xsDown>
              <img alt="Logo" src={Logo} height="46" width="240.2" />
            </Hidden>
            <Hidden smUp>
              <img alt="Logo" src={Logo} height="30" width="156.65" />
            </Hidden> */}

            <LogoComponent />
          </RouterLink>

          <div className={classes.flexGrow} />
          {isLoading ? (
            <CircularProgress></CircularProgress>
          ) : (
            <ReactFlagsSelect
              defaultCountry={formatLanguageToCountry(
                getLangcodeFromUrl(browserHistory.location.pathname)
              )}
              showSelectedLabel={false}
              showOptionLabel={false}
              onSelect={countryCode => {
                // eslint-disable-next-line no-console
                // filterActions.setLanguageFilter(
                //   formatCountryToLanguage(countryCode)
                // )

                browserHistory.push(
                  formatLangUrl(
                    browserHistory.location.pathname,
                    formatCountryToLanguage(countryCode)
                  )
                )

                languageActions.fetchLanguage()
                //set current language here
              }}
              countries={[
                'GB',
                'DK',
                'FI',
                'FR',
                'DE',
                'IT',
                'LV',
                'RU',
                'ES',
                'SE',
                'TR',
                'CZ',
                'NO',
                'EE',
                'NL',
                'PL',
                'US',
                'SK',
                'SI'
              ]}
            />
          )}

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
            <IconButton color="primary" onClick={onSidebarOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Divider></Divider>
      </AppBar>
    </>
  )
}

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
}

export default Topbar
