import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}))

const Footer = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div style={{ textAlign: 'right' }}>
        <Typography variant="caption">© 2018 Cocouz Oy Ltd.</Typography>
      </div>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
