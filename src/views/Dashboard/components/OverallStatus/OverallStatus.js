import React from 'react'
import { Doughnut, Pie, Bar, HorizontalBar } from 'react-chartjs-2'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/styles'
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core'
import Business from '@material-ui/icons/Business'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import RefreshIcon from '@material-ui/icons/Refresh'
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'
import { useSelector } from 'react-redux'
import toPercent from '../../../../helpers/toPercent'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(2),
    paddingBottom: 0
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}))

const UsersByDevice = props => {
  const { className, ...rest } = props

  const confirms = useSelector(state => state.bookingInfo.confirms)
  const customerPending = useSelector(
    state => state.bookingInfo.customerPending
  )
  const hotelPending = useSelector(state => state.bookingInfo.hotelPending)
  const total = confirms + customerPending + hotelPending

  const classes = useStyles()
  const theme = useTheme()

  const confirmsText = useSelector(state => state.language.text.confirms)
  const customerPendingText = useSelector(
    state => state.language.text.customerPending
  )
  const hotelPendingText = useSelector(
    state => state.language.text.hotelPending
  )
  const overallStatusText = useSelector(
    state => state.language.text.overallStatus
  )

  const data = {
    datasets: [
      {
        data: [confirms, customerPending, hotelPending],
        backgroundColor: [
          theme.palette.success.main,
          theme.palette.warning.main,
          theme.palette.info.main
        ],
        borderWidth: 8,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: [confirmsText, customerPendingText, hotelPendingText]
  }

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: { animateRotate: true, animateScale: true },
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    },
    plugins: {
      datalabels: {
        color: '#FFFFFF',
        font: {
          size: '25'
        },
        clamp: true
      }
    }
  }

  const status = [
    {
      title: hotelPendingText,
      value: isNaN(toPercent(hotelPending / total, 1))
        ? 0
        : toPercent(hotelPending / total, 1),
      icon: <Business />,
      color: theme.palette.info.main
    },

    {
      title: customerPendingText,
      value: isNaN(toPercent(customerPending / total, 1))
        ? 0
        : toPercent(customerPending / total, 1),
      icon: <SupervisedUserCircle />,
      color: theme.palette.warning.main
    },
    {
      title: confirmsText,
      value: isNaN(toPercent(confirms / total, 1))
        ? 0
        : toPercent(confirms / total, 1),
      icon: <DoneIcon />,
      color: theme.palette.success.main
    }
  ]

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title={overallStatusText}
      />
      <Divider />

      <CardContent>
        <div className={classes.chartContainer}>
          <Pie data={data} options={options} />
        </div>
        <div className={classes.stats}>
          {status.map(device => (
            <div className={classes.device} key={device.title}>
              <span className={classes.deviceIcon}>{device.icon}</span>
              <Typography variant="body1">{device.title}</Typography>
              <Typography style={{ color: device.color }} variant="h2">
                {device.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

UsersByDevice.propTypes = {
  className: PropTypes.string
}

export default UsersByDevice
