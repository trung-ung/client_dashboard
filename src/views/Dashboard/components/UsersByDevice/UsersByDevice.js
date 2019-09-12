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
    padding: theme.spacing(2)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}))

const UsersByDevice = props => {
  const { className, ...rest } = props

  const classes = useStyles()
  const theme = useTheme()

  const data = {
    datasets: [
      {
        data: [17, 3, 5],
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
    labels: ['confirms', 'customer pending', 'company pending']
  }

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,

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

  const devices = [
    {
      title: 'Confirms',
      value: '68',
      icon: <DoneIcon />,
      color: theme.palette.success.main
    },
    {
      title: 'Customer pendind',
      value: '12',
      icon: <SupervisedUserCircle />,
      color: theme.palette.warning.main
    },
    {
      title: 'Hotel pending',
      value: '20',
      icon: <Business />,
      color: theme.palette.info.main
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
        title="Overall Status"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Pie data={data} options={options} />
        </div>
        <div className={classes.stats}>
          {devices.map(device => (
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