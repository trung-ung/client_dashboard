import { Grid, Divider, Typography, Fade, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'
import {
  ConfirmedBookingValue,
  EventHeld,
  DayRangeFilter,
  LatestOrders,
  LatestProducts,
  LatestSales,
  SuccessBookingRate,
  RevenueEarned,
  TotalBookings,
  OverallStatus,
  VenuesDropdown,
  CancelBooking,
  DurationDropdown,
  AverageCount,
  UnconfirmedBookingValue,
  BookingSources,
  DayRangeFilterMobile,
  FutureOverallStatus,
  AverageConfirmedBooking,
  AverageLeadTime,
  AverageDelegateCount,
  NumberOfBookingsChart,
  MajorMeasurement,
  CancelBookingReasons
} from './components'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton'
import palette from '../../theme/palette'

import * as BookingInfoActions from '../../actions/bookingInfo'
import { useActions } from '../../actions'
import { useSelector, connect } from 'react-redux'
import { fetchBookingInfo } from '../../actions/bookingInfo'
//import { setLanguageFilter } from '../../actions/filter'
import { fetchLanguage } from '../../actions/language'
import { setStepFilter } from '../../actions/filter'
import Loader from 'react-loader-spinner'
import formatLanguageToCountry from '../../helpers/formatLanguageToCountry'
import moment from 'moment'
import { format } from 'date-fns'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  title: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2)
  }
}))

const Dashboard = ({
  fetchBookingInfo,
  isLoading,
  futureBookings,
  selectedDuration,
  match,
  // setLanguageFilter
  fetchLanguage,
  from,
  to,
  step,
  setStepFilter
}) => {
  const classes = useStyles()
  // const bookingInfoActions = useActions(BookingInfoActions)

  //const isLoading = useSelector(state => state.bookingInfo.isLoading)

  // useEffect(() => {
  //   bookingInfoActions.fetchBookingInfo()
  // }, [bookingInfoActions])

  useEffect(() => {
    if (step === 2) {
      fetchBookingInfo(
        25465,
        format(from, 'yyyy-MM-dd'),
        format(to, 'yyyy-MM-dd')
      )
      setStepFilter(0)
    }

    // eslint-disable-line react-hooks/exhaustive-deps
  }, [fetchBookingInfo, setStepFilter, step, from, to])

  useEffect(() => {
    fetchLanguage(match.params.langcode)
    // setLanguageFilter(match.params.langcode)
  }, [fetchLanguage, match])

  return (
    <Fade in>
      <div className={classes.root}>
        <Grid container spacing={4} justify="flex-start">
          <Grid item lg={3} sm={12} md={3} xl={3} xs={12}>
            <VenuesDropdown></VenuesDropdown>
          </Grid>
          {/* <Hidden only={['xs', 'md', 'lg', 'xl']}>
          <Grid item sm={6}></Grid>
        </Hidden> */}
          <Hidden smDown>
            <DayRangeFilter></DayRangeFilter>
          </Hidden>
          <Hidden mdUp>
            <DayRangeFilterMobile></DayRangeFilterMobile>
          </Hidden>

          {/* <Grid item lg={3} sm={12} md={3} xl={3} xs={12}>
          <DurationDropdown></DurationDropdown>
        </Grid> */}
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Divider varient="middle" style={{}}></Divider>
          </Grid>
        </Grid>

        <>
          {futureBookings ? (
            <Typography variant="h4" className={classes.title}>
              {futureBookings}
            </Typography>
          ) : (
            <>
              <Skeleton width="20%" className={classes.title} height="20px" />
            </>
          )}

          <Grid container spacing={4} justify="flex-start">
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <FutureOverallStatus />
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Grid container spacing={4} justify="flex-start">
                <Grid
                  item
                  // xl={6} lg={6} sm={6}
                  xs={12}>
                  <ConfirmedBookingValue></ConfirmedBookingValue>
                </Grid>
                <Grid
                  item
                  // xl={6} lg={6} sm={6}
                  xs={12}>
                  <UnconfirmedBookingValue></UnconfirmedBookingValue>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {selectedDuration ? (
            <Typography variant="h4" className={classes.title}>
              {selectedDuration}
            </Typography>
          ) : (
            <Skeleton width="20%" className={classes.title} height="20px" />
          )}

          <Grid container spacing={4} justify="flex-start">
            {/* <Grid item xl={3} lg={3} sm={6} xs={12}>
              <EventHeld />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalBookings />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <SuccessBookingRate />
            </Grid> */}

            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <AverageDelegateCount></AverageDelegateCount>
            </Grid>

            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <AverageLeadTime></AverageLeadTime>
            </Grid>

            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <AverageConfirmedBooking></AverageConfirmedBooking>
            </Grid>

            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <RevenueEarned />
            </Grid>
            <Grid item xl={3} lg={4} md={6} xs={12}>
              <OverallStatus />
            </Grid>
            {/* <Grid item lg={8} md={12} xl={9} xs={12}>
<LatestSales />
</Grid> */}

            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <Grid container spacing={4} justify="flex-start">
                <Grid item xs={12}>
                  <MajorMeasurement></MajorMeasurement>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <Grid container spacing={4} justify="flex-start">
                <Grid item xs={12}>
                  <CancelBookingReasons></CancelBookingReasons>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xl={3} lg={4} sm={6} xs={12}>
              <AverageCount></AverageCount>
            </Grid> */}

            <Grid item xl={3} lg={6} md={12} sm={12} xs={12}>
              <Grid item xs={12}>
                <BookingSources></BookingSources>
              </Grid>
            </Grid>
            <Grid item xl={9} lg={12} md={12} sm={12} xs={12}>
              <LatestOrders />
            </Grid>

            {/* <Grid item lg={4} md={6} xl={3} xs={12}>
<LatestProducts />
</Grid> */}
            {/* <Grid item lg={8} md={12} xl={9} xs={12}>
<LatestOrders />
</Grid> */}
          </Grid>
        </>
      </div>
    </Fade>
  )
}

Dashboard.propTypes = {
  fetchBookingInfo: PropTypes.func,
  isLoading: PropTypes.bool,
  futureBookings: PropTypes.string,
  selectedDuration: PropTypes.string,
  match: PropTypes.object,
  //setLanguageFilter: PropTypes.func,
  fetchLanguage: PropTypes.func,
  from: PropTypes.object,
  to: PropTypes.object,
  step: PropTypes.number,
  setStepFilter: PropTypes.func
}

const mapStateToProps = state => ({
  isLoading: state.bookingInfo.isLoading,
  selectedDuration: state.language.text.selectedDuration,
  futureBookings: state.language.text.futureBookings,
  from: state.filter.from,
  to: state.filter.to,
  step: state.filter.step
})

export default connect(
  mapStateToProps,
  {
    fetchBookingInfo,
    // setLanguageFilter,
    fetchLanguage,
    setStepFilter
  }
)(Dashboard)
