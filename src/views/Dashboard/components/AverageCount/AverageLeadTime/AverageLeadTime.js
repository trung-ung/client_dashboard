import React from 'react'
import AverageCard from '../AverageCard'
import GroupIcon from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/styles'
import { Avatar, IconButton, Fade } from '@material-ui/core'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import { useSelector } from 'react-redux'

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

  const averageLeadTimeText = useSelector(
    state => state.language.text.averageLeadTime
  )

  return (
    <AverageCard
      title={averageLeadTimeText}
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
