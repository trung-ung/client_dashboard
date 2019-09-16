import React from 'react'
import AverageCard from '../AverageCard'
import GroupIcon from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/styles'
import { Avatar, IconButton } from '@material-ui/core'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import WorkIcon from '@material-ui/icons/Work'

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.warning.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  iconButton: {
    color: 'white'
  }
}))

const AverageConfirmedBooking = () => {
  const classes = useStyles()

  return (
    <AverageCard
      title="AVERAGE CONFIRMED BOOKINGS"
      number={16}
      icon={
        <Avatar className={classes.avatar}>
          <IconButton className={classes.iconButton}>
            <WorkIcon className={classes.icon}></WorkIcon>
          </IconButton>
        </Avatar>
      }></AverageCard>
  )
}

export default AverageConfirmedBooking