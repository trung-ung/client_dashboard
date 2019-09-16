import React from 'react'
import AverageCard from '../AverageCard'
import GroupIcon from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/styles'
import { Avatar, IconButton, Fade } from '@material-ui/core'
import TimelapseIcon from '@material-ui/icons/Timelapse'

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.info.main,
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

const AverageLeadTime = () => {
  const classes = useStyles()
  return (
    <AverageCard
      title="AVERAGE LEAD TIME"
      number={32}
      icon={
        <Avatar className={classes.avatar}>
          <IconButton className={classes.iconButton}>
            <TimelapseIcon className={classes.icon}></TimelapseIcon>
          </IconButton>
        </Avatar>
      }></AverageCard>
  )
}

export default AverageLeadTime
