import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  IconButton
} from '@material-ui/core'
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol'
import formatMoney from '../../../../helpers/formatMoney'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  iconButton: { color: theme.palette.primary.main }
}))

const TotalProfit = props => {
  const { className, ...rest } = props
  const revenueEarned = useSelector(state => state.bookingInfo.revenueEarned)
  const classes = useStyles()

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="inherit"
              gutterBottom
              variant="body2">
              REVENUE EARNED
            </Typography>
            <Typography color="inherit" variant="h3">
              €{formatMoney(revenueEarned)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <IconButton className={classes.iconButton}>
                <EuroSymbolIcon className={classes.icon} />
              </IconButton>
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

TotalProfit.propTypes = {
  className: PropTypes.string
}

export default TotalProfit
