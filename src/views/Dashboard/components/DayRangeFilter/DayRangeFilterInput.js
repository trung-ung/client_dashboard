import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      width: '100%'
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    }
  })
)

const DayRangeFilterInput = props => {
  const [value, setValue] = useState('')
  const classes = useStyles()

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        value={value}
        //onChange={e => setValue(e.target.value)}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        {...props}
      />
    </form>
  )
}

export default DayRangeFilterInput
