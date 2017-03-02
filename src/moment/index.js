import moment from 'moment'

export function momentFromNow(isoDateTime) {
  return moment(isoDateTime).fromNow()
}

export function momentToday() {
  return moment.utc(new Date()).format('YYYY-MM-DD')
}

export function momentTomorrow() {
  return moment.utc(new Date()).add(1, 'd').format('YYYY-MM-DD')
}

export function momentDayAfterTomorrow() {
  return moment.utc(new Date()).add(2, 'd').format('YYYY-MM-DD')
}
