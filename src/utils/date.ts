export const MILLISECONDS_IN_SECOND = 1000
export const SECONDS_IN_MINUTE = 60
export const MINUTES_IN_HOUR = 60
export const HOURS_IN_DAY = 24
export const DAYS_IN_WEEK = 7
export const DAYS_IN_MONTH_APPROX = 30
export const DAYS_IN_YEAR_APPROX = 365

export const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE

// returns string like "2023-08-02T04:00:00.000Z" that is midnight in current timezone from number of days ago.
// not smart about timezones, and overall not very smart
export function dateFromNumberOfDaysAgo(numDaysAgo: number): string {
  const currentDate = new Date()

  const pastDate = new Date()
  pastDate.setDate(currentDate.getDate() - numDaysAgo)

  pastDate.setHours(0, 0, 0, 0)

  return pastDate.toISOString()
}

// returns string like "2023-08-02T04:00:00.000Z" that is rounded down to closest hour
export function dateFrom24HoursAgo(): string {
  const currentDate = new Date()

  const pastDate = new Date()
  pastDate.setDate(currentDate.getDate() - 1)

  pastDate.setMinutes(0, 0, 0)

  return pastDate.toISOString()
}

export function formatTimeAgoWithIntl(date: Date) {
  const currentDate = new Date()
  const timeDifferenceMilliseconds = currentDate.valueOf() - date.valueOf()

  const timeDifferenceSeconds = timeDifferenceMilliseconds / MILLISECONDS_IN_SECOND
  const timeDifferenceMinutes = timeDifferenceSeconds / SECONDS_IN_MINUTE
  const timeDifferenceHours = timeDifferenceMinutes / MINUTES_IN_HOUR
  const timeDifferenceDays = timeDifferenceHours / HOURS_IN_DAY
  const timeDifferenceWeeks = timeDifferenceDays / DAYS_IN_WEEK
  const timeDifferenceMonths = timeDifferenceDays / DAYS_IN_MONTH_APPROX
  const timeDifferenceYears = timeDifferenceDays / DAYS_IN_YEAR_APPROX

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

  if (Math.floor(timeDifferenceYears) >= 1) {
    return rtf.format(-Math.floor(timeDifferenceYears), 'year')
  } else if (Math.floor(timeDifferenceMonths) >= 1) {
    return rtf.format(-Math.floor(timeDifferenceMonths), 'month')
  } else if (Math.floor(timeDifferenceWeeks) >= 1) {
    return rtf.format(-Math.floor(timeDifferenceWeeks), 'week')
  } else if (Math.floor(timeDifferenceDays) >= 1) {
    return rtf.format(-Math.floor(timeDifferenceDays), 'day')
  } else if (Math.floor(timeDifferenceHours) >= 1) {
    return rtf.format(-Math.floor(timeDifferenceHours), 'hour')
  } else if (Math.floor(timeDifferenceMinutes) >= 1) {
    return rtf.format(-Math.floor(timeDifferenceMinutes), 'minute')
  } else if (Math.floor(timeDifferenceSeconds) >= 1) {
    return rtf.format(-Math.floor(timeDifferenceSeconds), 'second')
  } else {
    return 'now'
  }
}
