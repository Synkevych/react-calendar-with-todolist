import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CalendarActions from '../actions'

import moment from 'moment'

import CalendarNav from '../components/CalendarNav'

class CalendarNavContainer extends Component {
  render () {
    const { currentMonthIndex, actions } = this.props
    const currentMonthTitle = moment().startOf('month').add(currentMonthIndex, 'month').format('MMMM YYYY')

    return (
      <div className="calendar__nav">
        <h4 className="calendar__header--label">Calendar View</h4>
        <div className="calendar__button--control">
          <div className="calendar__nav--right">
            <button className="calendar__button--active ">Month</button>
            <button>Week</button>
            <button>Day</button>
            <button>Agenda</button>
          </div>
        </div>
        <CalendarNav
          nextMonthAction={actions.nextMonth}
          prevMonthAction={actions.prevMonth}
          currentMonthTitle={currentMonthTitle}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMonthIndex: state.calendar.currentMonthIndex
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CalendarActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarNavContainer)
