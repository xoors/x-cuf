import moment from 'moment'

export function momentFromNow(isoDateTime) {
  return moment(isoDateTime).fromNow() //E.g. 2 months ago, a few seconds ago
}

export function today() {
  return moment.utc(new Date()).format('YYYY-MM-DD') //E.g. Sat May 13 2017 08:00:00 GMT+0800 (CST)
}

export function tomorrow() {
  return moment.utc(new Date()).add(1, 'd').format('YYYY-MM-DD') //E.g. Sun May 14 2017 08:00:00 GMT+0800 (CST)
}

export function dayAfterTomorrow() {
  return moment.utc(new Date()).add(2, 'd').format('YYYY-MM-DD') //E.g. Mon May 15 2017 08:00:00 GMT+0800 (CST)
}

export function dayOfWeek(isoDateTime, format) {
  let result
  switch (format) {
    case 'short': {
      result = moment(isoDateTime).format('ddd')
      break
    }
    default: {
      result = moment(isoDateTime).format('dddd')
    }
  }
  return result
}

export function dayOfMonth(isoDateTime, format) {
  return moment(isoDateTime).format('D')
}

export function month(isoDateTime, format) {
  let result
  switch (format) {
    case 'short': {
      result = moment(isoDateTime).format('MMM')
      break
    }
    default: {
      result = moment(isoDateTime).format('MMMM')
    }
  }
  return result
}

export function localizedDateTime(isoDateTime, format) {
  let result
  switch (format) {
    case 'shortdate': {
      result = moment(isoDateTime).format('ll')
      break
    }
    case 'longdate': {
      result = moment(isoDateTime).format('LL')
      break
    }
    default: {
      result = moment(isoDateTime).format('LLLL')
    }
  }
  return result
}

export function isBeforeToday(isoDateTime) {
  return moment(isoDateTime).isBefore(today())
}

export function isAfterToday(isoDateTime) {
  return moment(isoDateTime).isAfter(today())
}

export function isToday(isoDateTime) {
  if (moment(isoDateTime).diff(today(), 'days') === 0) {
    return true
  } else {
    return false
  }
}
