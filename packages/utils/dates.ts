export function getYearDateRange(year: number) {
  return {
    startDate: `${year}-01-01`,
    endDate: `${year + 1}-01-01`,
  };
}

export function formatDate(
  value: string | Date,
  options: Intl.DateTimeFormatOptions = {
    dateStyle: "medium",
    timeStyle: "short",
  },
) {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(value));
}
