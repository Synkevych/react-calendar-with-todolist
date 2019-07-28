import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  currentMonthTitle: PropTypes.string.isRequired,
  nextMonthAction: PropTypes.func.isRequired,
  prevMonthAction: PropTypes.func.isRequired
}

function CalendarNav ({ currentMonthTitle, nextMonthAction, prevMonthAction }) {
  return (
    <div className='calendar__button--control'>
      <div className="calendar__nav--left">
          <button className="calendar__button--active">Today</button>
          <button onClick={prevMonthAction}>Back</button>
          <button onClick={nextMonthAction}>Next</button>
      </div>
      <h2 className="calendar__month--title">
        {currentMonthTitle}
      </h2>
    </div>
  )
}

CalendarNav.propTypes = propTypes

export default CalendarNav
