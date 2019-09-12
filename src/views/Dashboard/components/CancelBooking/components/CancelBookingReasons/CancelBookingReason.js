import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import mockData from './data'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  // header: {
  //   backgroundColor: theme.palette.error.light
  // },

  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}))

const LatestProducts = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  const [products] = useState(mockData)

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Top Cancel Reasons"
        // action={
        //   <IconButton size="small">
        //     <CancelIcon />
        //   </IconButton>
        // }
        className={classes.header}
      />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Reasons</TableCell>

              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Times
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow hover key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

LatestProducts.propTypes = {
  className: PropTypes.string
}

export default LatestProducts

/* //old list
<List>
{products.map((product, i) => (
  <ListItem divider={i < products.length - 1} key={product.id}>
    <ListItemAvatar>
      <img
        alt="Product"
        className={classes.image}
        src={product.imageUrl}
      />
    </ListItemAvatar>
    <ListItemText
      primary={product.name}
      secondary={`Updated ${product.updatedAt.fromNow()}`}
    />
    <ListItemSecondaryAction>
      {product.number}
    </ListItemSecondaryAction>
    <IconButton edge="end" size="small">
      <MoreVertIcon />
    </IconButton>
  </ListItem>
))}
</List>
*/