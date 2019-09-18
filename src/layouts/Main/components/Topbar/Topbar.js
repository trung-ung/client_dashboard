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
import { useActions } from '../../../../actions'

import ReactFlagsSelect from 'react-flags-select'
import formatCountryToLanguage from '../../../../helpers/formatCountryToLanguage'

// langlist: [
//   {id: 1, text: 'English', value: 'en' },
//   {id: 2, text: 'Dansk', value: 'da' },
//   {id: 3, text: 'Suomi', value: 'fi' },
//   {id: 4, text: 'Français', value: 'fr' },
//   {id: 5, text: 'Deutsch', value: 'de' },
//   {id: 6, text: 'Italiano', value: 'it' },
//   {id: 7, text: 'Latviešu', value: 'lv' },
//   {id: 8, text: 'Русский', value: 'ru' },
//   {id: 9, text: 'Español', value: 'es' },
//   {id: 10, text: 'Svenska', value: 'sv' },
//   {id: 11, text: 'Türkçe', value: 'tr' },
//   {id: 12, text: 'Čeština', value: 'cs' },
//   {id: 13, text: 'Norsk', value: 'nb' },
//   {id: 14, text: 'Eesti', value: 'et' },
//   {id: 15, text: 'Nederlands', value: 'nl' },
//   {id: 15, text: 'Polska', value: 'pl' },
//   {id: 16, text: 'US English', value: 'en-us' },
//   {id: 17, text: 'Slovak', value: 'sk' },
//   {id: 18, text: 'Slovenščina', value: 'sl' },
// ],

// const

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

  // const [notifications] = useState([])

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
          <ReactFlagsSelect
            defaultCountry="FI"
            showSelectedLabel={false}
            showOptionLabel={false}
            onSelect={countryCode => {
              // eslint-disable-next-line no-console
              console.log(formatCountryToLanguage(countryCode))
              languageActions.fetchLanguage()
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
