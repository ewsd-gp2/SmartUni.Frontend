import moment from "moment";

export const todayStart = moment()
.utc()
.set({
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
})
.toISOString();

export const todayEnd = moment()
.utc()
.add(1, "day")
.set({
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
})
.toISOString();

export const thisWeekStart = moment()
.utc()
.startOf('isoWeek') 
.set({
hour: 0,
minute: 0,
second: 0,
millisecond: 0,
})
.toISOString();

export const thisWeekEnd = moment()
.utc()
.startOf('isoWeek')
.add(7, 'days')
.set({
hour: 0,
minute: 0,
second: 0,
millisecond: 0,
})
.toISOString();

