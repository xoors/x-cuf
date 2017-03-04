import moment from 'moment'

export function momentFromNow(isoDateTime) {
  return moment(isoDateTime).fromNow()
}

export function dateToday() {
  return moment.utc(new Date()).format('YYYY-MM-DD')
}

export function dateTomorrow() {
  return moment.utc(new Date()).add(1, 'd').format('YYYY-MM-DD')
}

export function dateDayAfterTomorrow() {
  return moment.utc(new Date()).add(2, 'd').format('YYYY-MM-DD')
}
