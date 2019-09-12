import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      //width: '100%',
    }
  })
)

const DayRangeFilterInput = (props, ref) => {
  const [value, setValue] = useState('')
  const classes = useStyles()
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => inputRef.current)

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        inputRef={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        {...props}
        fullWidth
      />
    </form>
  )
}

export default forwardRef(DayRangeFilterInput)