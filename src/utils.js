import { differenceInDays } from "date-fns"

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const getMonthName = date => MONTH_NAMES[date.getMonth()]

export const renderDateRange = (start, end) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  if (differenceInDays(endDate, new Date()) > 0) {
    return (
      getMonthName(startDate) + " " + startDate.getFullYear() + " - current"
    )
  }
  if (startDate.getFullYear() === endDate.getFullYear()) {
    return (
      getMonthName(startDate) +
      " - " +
      getMonthName(endDate) +
      " " +
      startDate.getFullYear()
    )
  }
  return (
    getMonthName(startDate) +
    " " +
    startDate.getFullYear() +
    " - " +
    getMonthName(endDate) +
    " " +
    endDate.getFullYear()
  )
}
