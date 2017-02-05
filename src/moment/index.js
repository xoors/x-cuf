import moment from 'moment'

export function momentFromNow(isoDateTime) {
  return moment(isoDateTime).fromNow();
}
